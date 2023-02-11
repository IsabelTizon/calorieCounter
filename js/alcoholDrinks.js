let sumCart = 0;

document.querySelector(".btn-add-beer").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 136);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 136);
	}
});

document.querySelector(".btn-add-gin").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 105);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 105);
	}
});
document.querySelector(".btn-add-ron").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 116);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 116);
	}
});

document.querySelector(".btn-add-wine").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 133);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 133);
	}
});

document
	.querySelector(".btn-add-baileys")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 314);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 314);
		}
	});

document
	.querySelector(".btn-add-whiskey")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 111);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 111);
		}
	});
