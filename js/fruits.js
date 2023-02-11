let sumCart = 0;

document.getElementById("btn-add-pear").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 100);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 100);
	}
});

document.getElementById("btn-add-apple").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 95);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 95);
	}
});
document.getElementById("btn-add-kiwie").addEventListener("click", function () {
	let myStorage = window.localStorage.getItem("sumCart");

	if (!myStorage) {
		window.localStorage.setItem("sumCart", 63);
	} else {
		window.localStorage.setItem("sumCart", parseInt(myStorage) + 63);
	}
});

document
	.getElementById("btn-add-orange")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 60);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 60);
		}
	});

document
	.getElementById("btn-add-banana")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 110);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 110);
		}
	});

document
	.getElementById("btn-add-grapes")
	.addEventListener("click", function () {
		let myStorage = window.localStorage.getItem("sumCart");

		if (!myStorage) {
			window.localStorage.setItem("sumCart", 69);
		} else {
			window.localStorage.setItem("sumCart", parseInt(myStorage) + 69);
		}
	});
