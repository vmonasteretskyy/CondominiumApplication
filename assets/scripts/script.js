var Info = {}
var Eclipse = {
	elem: undefined,
	opened: false,
	count: 0,
	arr: [],
}
document.addEventListener("DOMContentLoaded", function(event) {
	if (onLoaded.length != 0) {
		for (var i = 0; i < onLoaded.length; i++) {
			onLoaded[i]();
		}
	}
	window.addEventListener("resize", function() {
		if (onResize.length != 0) {
			for (var i = 0; i < onResize.length; i++) {
				onResize[i]();
			}
		}	
	});
});

onLoaded.push(function() {
	/*-init-eclipse-*/
	Eclipse.elem = document.getElementById("eclipse");
	Eclipse.elem.onclick = function() {
		Eclipse.arr[Eclipse.arr.length - 1].classList.remove("active");
		Eclipse.arr = Eclipse.arr.slice(0, Eclipse.arr.length - 1);
		Eclipse.count--;
		checkEclipse();
	}
	/*-init-popups-*/
	var popups = document.getElementsByClassName("popup");
	var closeClass = "close-popup";
	for (var i = 0; i < popups.length; i++) {
		const ci = i;
		var btn = popups[ci].getElementsByClassName(closeClass)[0];
		btn.onclick = function() {
			popups[ci].classList.remove("active");
			if (Eclipse.count > 0) {
				Eclipse.arr = Eclipse.arr.slice(0, Eclipse.arr.length - 1);
				Eclipse.count--;
				checkEclipse();
			}
		}
	}
});

function openPopup(id) {
	var elem = document.getElementById(id);
	elem.classList.add("active");
	Eclipse.arr.push(elem);
	Eclipse.count++;
	checkEclipse();
}

function checkEclipse() {
	if (Eclipse.count > 0 && !Eclipse.opened) {
		Eclipse.elem.classList.add("active");
		Eclipse.opened = true;
	}
	if (Eclipse.count == 0) {
		Eclipse.elem.classList.remove("active");
		Eclipse.opened = false;
	}
}

onLoaded.push(function() {
	var eyes = document.getElementsByClassName("icon-eye");
	if (eyes.length != 0) {
		for (var i = 0; i < eyes.length; i++) {
			const ci = i;
			var input = eyes[ci].parentNode.getElementsByTagName("input")[0];
			eyes[ci].onmousedown = function() {
				input.type = "text";
			};
			eyes[ci].onmouseup = function() {
				input.type = "password";
			};
		}
	}
});