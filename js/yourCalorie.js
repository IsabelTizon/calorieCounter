// let sumCart = 0;

// document.querySelector(".btn.right").addEventListener("click", function () {
// 	total = window.localStorage.getItem("sumCart");
// 	document.getElementById("total-calories").innerHTML = total;
// });

// document.getElementById("counter-reset").addEventListener("click", function () {
// 	window.localStorage.clear();
// 	document.getElementById("total-calories").innerHTML = "0";
// });

let sumCart = 0;

document.querySelector(".btn.right").addEventListener("click", function () {
	total = window.localStorage.getItem("sumCart");
	document.getElementById("total-calories").innerHTML = total;
});

document.getElementById("counter-reset").addEventListener("click", function () {
	window.localStorage.clear();
	document.getElementById("total-calories").innerHTML = "0";
});
