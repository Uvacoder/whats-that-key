const keycode = document.getElementsByTagName("body")[0];

function checkWord(e){
		const tag = document.querySelector(".tag");
		const tagCode = document.querySelector(".tag--code");
		const taglocation = document.querySelector(".tag--location");
		const keyCodes = document.querySelector(".keycodes");
		keyCodes.style.opacity = "1";
		tag.innerHTML = e.key;
		tagCode.innerHTML = e.keyCode;
		taglocation.innerHTML = e.location;
}

keycode.addEventListener("keydown",checkWord);
