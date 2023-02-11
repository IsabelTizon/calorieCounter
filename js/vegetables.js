let sumCart = 0;

document
	.querySelector(".btn-add-broccoli")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 34);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 34);
		}
	});

document
	.querySelector(".btn-add-carrots")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 41);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 41);
		}
	});

document
	.querySelector(".btn-add-tomatoes")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 18);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 18);
		}
	});

document
	.querySelector(".btn-add-potatoes")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 110);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 110);
		}
	});
document
	.querySelector(".btn-add-cucumber")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 15);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 15);
		}
	});

document
	.querySelector(".btn-add-peppers")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 31);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 31);
		}
	});
