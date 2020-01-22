const keycode = document.getElementsByTagName("body")[0];

function checkWord(e){
		const tag = document.querySelector(".tag");
		tag.innerHTML = e.keyCode;
}

keycode.addEventListener("keydown",checkWord);