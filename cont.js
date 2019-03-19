alert("Click anywhere to esektit")


// Used like so
// var esk = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10];
// esk = shuffle(arr);



document.addEventListener('click', () => {
  let url = chrome.runtime.getURL("esk1.mp3"); 
	console.log(url)

	let a = new Audio(url)
	a.play()
})
