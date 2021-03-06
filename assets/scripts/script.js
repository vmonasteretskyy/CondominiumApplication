var Info = {
	vw: 0,
	vh: 0,
	mob: false,
}
var Eclipse = {
	elem: undefined,
	opened: false,
	count: 0,
	arr: [],
}
document.addEventListener("DOMContentLoaded", function(event) {
	resizeFunc();
	if (onLoaded.length != 0) {
		for (var i = 0; i < onLoaded.length; i++) {
			onLoaded[i]();
		}
	}
	window.addEventListener("resize", function() {
		resizeFunc();
		if (onResize.length != 0) {
			for (var i = 0; i < onResize.length; i++) {
				onResize[i]();
			}
		}	
	});
});
function resizeFunc() {
	Info.vw = window.innerWidth;
	Info.vh = window.innerHeight;
	if (Info.vw < 1111) {
		Info.mob = true;
	} else {
		Info.mob = false;
	}
}

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

function openPopup(idDesc, idMob = undefined) {
	var elem = undefined;
	if (!idMob) { 
		elem = document.getElementById(idDesc);
	} else {
		if (Info.mob) {
			elem = document.getElementById(idMob);
		} else {
			elem = document.getElementById(idDesc);
		}
	}
	elem.classList.add("active");
	Eclipse.arr.push(elem);
	Eclipse.count++;
	checkEclipse();
}

onLoaded.push(function() {
	var parents = document.getElementsByClassName("parent-calc-h");
	var elems = document.getElementsByClassName("calc-h");
	if (parents.length == 0) {return;}
	if (parents.length != elems.length) {
		console.warn("Accordions layout is incorrect! Correct: ('.parent-calc-h' > '.calc-h)");
		return;
	}
	for (var i = 0; i < parents.length; i++) {
		const ci = i;
		parents[ci].style.height = elems[ci].getBoundingClientRect().height + "px";
	}
	var close = document.getElementsByClassName("accordion-close");
	for (var i = 0; i < close.length; i++) {
		const ci = i;
		close[ci].onclick = function() {
			this.closest(".parent-calc-h").classList.add("hidden");
		}
	}
});
function openHPopup(idDesc, idMob) {
	var elem = undefined;
	if (!idMob) { 
		elem = document.getElementById(idDesc);
	} else {
		if (Info.mob) {
			elem = document.getElementById(idMob);
			elem.classList.add("active");
			Eclipse.arr.push(elem);
			Eclipse.count++;
			checkEclipse();
		} else {
			elem = document.getElementById(idDesc);
			elem.classList.remove("hidden");
		}
	}
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



/*--------------------------------------------------*/
/*-b-classes----------------------------------------*/
class DnD {
	constructor(params = {
		blockId: undefined,
		inputId: undefined,
		formats: [],
		maxSizeMb: 0,
	}) {
		this.params = params;
		this.block = document.getElementById(this.params.blockId);
		this.input = document.getElementById(this.params.inputId);
		
		this.mb = 1048576;

		this.file = undefined;

		this.block.addEventListener('dragenter', this.areaDragEnter, false)
		this.block.addEventListener('dragleave', this.areaDragLeave, false)
		this.block.addEventListener('dragover', this.areaDragOver, false)
		this.block.addEventListener('drop', {handleEvent: this.areaDrop, father: this}, false)
	}
	areaDragEnter(e) {
		e.preventDefault();
	}
	areaDragLeave(e) {
		e.preventDefault();
	}
	areaDragOver(e) {
		e.preventDefault();
	}
	areaDrop(e) {
		e.preventDefault();
		e.stopPropagation();

		this.father.file = e.dataTransfer.files[0];

		/* 1mb = 1 048 576 b */
		if (this.father.file.size > this.father.mb * this.father.params.maxSizeMb) {
			this.father.file = undefined;
			alert("File has more than", this.father.mb * this.father.params.maxSizeMb, "Mb");
			return;
		} 
		
		var filetype = this.father.file.name.substr(this.father.file.name.lastIndexOf(".") + 1);
		if (!this.father.params.formats.includes(filetype)) {
			this.father.file = undefined;
			alert("Filetype is not supported");
			return;
		}
	}
	cFetch(files) {
		// fetch(url, [options])
		//.then(response => response.json())
		//.then(result => /* обрабатываем результат */)
	}
	
} 


/*-e-classes----------------------------------------*/
/*--------------------------------------------------*/