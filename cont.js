alert("Click anywhere to esektit"); 

// document.documentElement.style.display = 'none';
// setTimeout(playsound(), 3000);
	// playsound() 

//plays the audio sounds randomly whenever you register a mouse click
document.addEventListener('click', () => {
		var rand = [1, 2, 3, 4, 5];	
		rand = shuffle(rand); 
		var ran = rand[1]; 
		if(ran = 1) {
			var random = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10];
			random = shuffle(random);
			var str1 = "esk";
			var str2 = random[1];  
			var str3 = ".mp3";
			var audioClip = str1.concat(str2, str3);
			var ac = audioClip.toString(); 
		}
		if(ran = 2) {
			var random = [1, 2, 3, 4, 5 , 6 , 7 , 8];
			random = shuffle(random);
			var str1 = "flex";
			var str2 = random[1];  
			var str3 = ".mp3";
			var audioClip = str1.concat(str2, str3);
			var ac = audioClip.toString(); 
		}
		if(ran = 3) {
			var random = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10, 11, 12, 13, 14, 15, 16, 17];
			random = shuffle(random);
			var str1 = "scho";
			var str2 = random[1];  
			var str3 = ".mp3";
			var audioClip = str1.concat(str2, str3);
			var ac = audioClip.toString(); 
		}
		if(ran = 4) {
			var random = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10, 11, 12, 13, 14, 15, 16, 17];
			random = shuffle(random);
			var str1 = "soc";
			var str2 = random[1];  
			var str3 = ".mp3";
			var audioClip = str1.concat(str2, str3);
			var ac = audioClip.toString(); 
		}
		if(ran = 5) {
			var random = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
			random = shuffle(random);
			var str1 = "gang";
			var str2 = random[1];  
			var str3 = ".mp3";
			var audioClip = str1.concat(str2, str3);
			var ac = audioClip.toString(); 
		}
	let url = chrome.runtime.getURL(ac); 
	console.log(url)
	let a = new Audio(url)
	a.play()
// }
})


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}