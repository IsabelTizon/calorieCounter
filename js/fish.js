let sumCart = 0;

document
	.getElementById("btn-add-salmon")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 208);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 208);
		}
	});

document
	.getElementById("btn-add-sea_bass")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 124);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 124);
		}
	});
document.getElementById("btn-add-cod").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 82);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 82);
	}
});

document
	.getElementById("btn-add-prawns")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 99);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 99);
		}
	});

document.getElementById("btn-add-clams").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 74);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 74);
	}
});

document
	.getElementById("btn-add-lobster")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 98);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 98);
		}
	});
