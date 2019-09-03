var pumpifySites = [];
var tabBlockingMap = {};

chrome.storage.local.get("blocked", function(items) {
  if (items.blocked)
    pumpifySites = items.blocked;
});

function addSite(tabid, blockedSite) {
  pumpifySites.push(blockedSite);
  tabBlockingMap[tabid] = blockedSite;
}

function unlistSite(tabid, site) {
  var i = pumpifySites.indexOf(site);
  if (i > -1)
    pumpifySites.splice(i, 1);
  chrome.storage.local.set( {blocked: pumpifySites}, function() {
    console.log("Site Unlisted");
  });
  tabBlockingMap[tabid] = 0;
}

function clearBlacklist() {
  pumpifySites = [];
  tabBlockingMap = {};
}

function getTabState(tabid) {
  console.log(tabid);
  return tabBlockingMap[tabid];
}

function requestChecker(request) {
  console.log("onBeforeRequest");
  if (request && request.url) {
    if (request.type == "main_frame") {
      var tabBlockingState = 0;
      for (var i = 0; i < pumpifySites.length; ++i) {
        if (request.url.match(new RegExp(
            ".*" + pumpifySites[i] + ".*", "i"))) {
          tabBlockingState = pumpifySites[i];
        }
      }
      chrome.tabs.getSelected(null, function(tab) {
        tabBlockingMap[tab.id] = tabBlockingState;
        console.log(
          "tab blocking state set for tab " +
          tab.id +
          " to " +
          tabBlockingState);
      });
      if (tabBlockingState != 0) {
        var redirectUrl = chrome.extension.getURL(
            "blockedSite.html?blocked=" + tabBlockingState);
        return { redirectUrl: redirectUrl };
      }
    }
  }
}

chrome.webRequest.onBeforeRequest.addListener(
  requestChecker, {urls: ["*://*/*"]}, ["blocking"]);

function updateMapping(details) {
  console.log("onCommitted");
  console.log(
    "replacing tab " +
    details.replacedTabId +
    " with tab " +
    details.tabId);
  if (typeof details.replacedTabId == "undefined") {
    if (!details.tabId in tabBlockingMap) {
      tabBlockingMap[details.tabId] = 0;
    }
  }
  else {
    tabBlockingMap[details.tabId] = tabBlockingMap[details.replacedTabId];
    delete tabBlockingMap[details.replacedTabId];
  }
}

chrome.webNavigation.onTabReplaced.addListener(updateMapping);
chrome.webNavigation.onCommitted.addListener(updateMapping);