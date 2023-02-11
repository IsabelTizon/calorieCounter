let sumCart = 0;

document.getElementById("btn-add-bread").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 265);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 265);
	}
});

document
	.getElementById("btn-add-cheerios")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 369);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 369);
		}
	});
document.getElementById("btn-add-pasta").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 131);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 131);
	}
});

document
	.getElementById("btn-add-porridge")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 50);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 50);
		}
	});

document.getElementById("btn-add-rice").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 130);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 130);
	}
});

document
	.getElementById("btn-add-cookies")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 502);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 502);
		}
	});
