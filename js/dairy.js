let sumCart = 0;

document.getElementById("btn-add-milk").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 100);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 100);
	}
});

document
	.getElementById("btn-add-cheese")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 350);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 350);
		}
	});
document.getElementById("btn-add-eggs").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 150);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 150);
	}
});

document
	.getElementById("btn-add-yougurt")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 59);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 59);
		}
	});

document
	.getElementById("btn-add-mozzarela")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 280);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 280);
		}
	});

document.getElementById("btn-add-cream").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 196);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 196);
	}
});
