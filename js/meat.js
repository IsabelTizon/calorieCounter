let sumCart = 0;

document
	.getElementById("btn-add-salami")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 336);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 336);
		}
	});

document
	.getElementById("btn-add-sausages")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 346);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 346);
		}
	});
document
	.getElementById("btn-add-chicken")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 239);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 239);
		}
	});

document.getElementById("btn-add-bacon").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 541);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 541);
	}
});

document.getElementById("btn-add-steak").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 271);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 271);
	}
});

document
	.getElementById("btn-add-turkey")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 189);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 189);
		}
	});
