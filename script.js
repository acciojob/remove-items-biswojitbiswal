//your JS code here. If required.
let btn = document.querySelector("input[type='button']");
let selctor = document.getElementById("colorSelect");

btn.addEventListener("click", () => {
	let selectIndex = selctor.selectedIndex;

	if(selectIndex !== -1){
		selctor.remove(selectIndex);
	}
})