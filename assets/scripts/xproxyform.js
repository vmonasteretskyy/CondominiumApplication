class PgNav {
	constructor(screens) {
		this.screens = screens;
		for (var i = 0; i < this.screens.length; i++) {
			const ci = i;
			if (this.screens[ci].next) {
				var parent = this;
				this.screens[ci].next.onclick = function() {
					// hide this screen
					parent.screens[ci].elem.classList.remove("active");
					// some action after hiding
					if (parent.screens[ci].classes.length) {
						for (var j = 0; j < parent.screens[ci].classes.length; j++) {
							const cj = j;
							if (parent.screens[ci].classes[cj].add) {
								document.querySelector(parent.screens[ci].classes[cj].whom).classList.add(
									parent.screens[ci].classes[cj].className
								);
							} else {
								document.querySelector(parent.screens[ci].classes[cj].whom).classList.remove(
									parent.screens[ci].classes[cj].className
								);
							}						
						}
					}
				}
			}
		}
	}
}

var pgNav = undefined;
onLoaded.push(function() {
	pgNav = new PgNav([
		{
			// start 
			allow: true,
			elem: document.getElementsByClassName("lcypv")[0], 
			next: document.getElementById("lcypv-btn"),
			classes: [
				{
					add: true,
					whom: "body",
					className: "voting",
				},
			]
		},
		{
			// pg-slider
			allow: false,
			elem: document.getElementsByClassName("xproxyform")[0],
		},
	]);
});

class PgSlider {
	constructor(params = {
		hiderId: undefined,
		sliderId: undefined,
		slides: undefined,
		prevs: undefined,
		nexts: undefined,
		navParentId: undefined,
		navElem: undefined,
		navElemH: 0,
	}) {
		this.params = params;
		var parent = this;
		this.hider = document.getElementById(this.params.hiderId);
		this.slider = document.getElementById(this.params.sliderId);
		this.slides = document.getElementsByClassName(this.params.slides);
		this.prevs = document.getElementsByClassName(this.params.prevs);
		this.nexts = document.getElementsByClassName(this.params.nexts);

		this.navParent = document.getElementById(this.params.navParentId);
		this.navElem = document.getElementsByClassName(this.params.navElem);

		this.counter = 0;
		this.counterP = 0;
		this.navCounter = 0;

		this.amount = this.slides.length;
		this.allowNext = new Array(this.amount).fill(false);

		this.allowNext[0] = true;

		this.onResize();



		for (var i = 0; i < this.prevs.length; i++) {
			const ci = i;
			var parent = this;
			this.prevs[ci].onclick = function() {
				if (parent.counter > 0) {
					parent.counter--;
					parent.transform();
				}
			}
			
		}
		for (var i = 0; i < this.nexts.length; i++) {
			const ci = i;
			var parent = this;
			this.nexts[ci].onclick = function() {
				if (parent.counter < parent.amount - 1) {
					parent.counter++;
					parent.transform();
				}
			}
			
		}
	}

	onResize() {
		this.slider.style.width = this.slides.length * 100 + "vw";
		this.transform();
	}

	transform() {
		// console.log("a", this.slider, "translateX(" + (-this.counter * Info.vw) + "px)");
		this.slider.style.transform = "translateX(" + (-this.counter * Info.vw) + "px)"; 
		this.checkLeft();
		this.counterP = this.counter;
	}

	checkLeft() {
		if (this.counter < this.counterP) {
			this.navElem[this.counter].classList.add("checked");
			this.navElem[this.counterP-1].classList.remove("checked");
			if (this.counter - 2 < this.navCounter) {
				this.navCounter--;
				this.navParent.scroll({
					top: this.navCounter * this.params.navElemH,
					left: 0,
					behavior: 'smooth'
				});
			}
		} else if (this.counter != 0) {
			this.navElem[this.counter - 1].classList.add("checked");
			if (this.counter - 2 > this.navCounter) {
				this.navCounter++;
				this.navParent.scroll({
					top: this.navCounter * this.params.navElemH,
					left: 0,
					behavior: 'smooth'
				});
			}
		}
		return;
	}
}

var pgSlider = undefined;
onLoaded.push(function() {
	pgSlider = new PgSlider({
		hiderId: "pg-slider-hider",
		sliderId: "pg-slider",
		slides: "pg-elem",
		prevs: "pgnav-prev",
		nexts: "pgnav-next",
		navParentId: "left-pr",
		navElem: "left-pr-elem",
		navElemH: 82,
	});
	onResize.push(function() {
		pgSlider.onResize();
	})
});

class CVote {
	constructor(params = {
		slideParentId: undefined,

		curElemId: undefined,

		parentId: undefined,

		cands: undefined,
		namesElems: undefined,
		nums: undefined,
		// close: undefined,

		notCands: undefined,
		// notClose: undefined,

		inputId: undefined,
		addId: undefined,
	}) {
		if (!params.curElemId || !params.parentId || !params.cands) {console.warn("Can't init page slider");return;}
		this.params = params;
		var parent = this;

		this.whichNotCand = 0;
		this.cur = 0;
		this.count = 0;
		this.limit = 0;

		this.names = undefined;
		this.order = undefined;

		this.timeOut = undefined;

		this.result = undefined;

		this.parent = document.getElementById(this.params.parentId);
		this.slideParent = document.getElementById(this.params.slideParentId);
		this.initVoteCandsLink();
		this.curElem = document.getElementById(this.params.curElemId);
		this.notCands = document.getElementsByClassName(this.params.notCands);
		// this.notClose = document.getElementsByClassName(this.params.notClose);

		this.input = document.getElementById(this.params.inputId);
		this.add = document.getElementById(this.params.addId);
		this.limit = +this.parent.dataset.voteLimit;
		this.canUsed = new Array(this.limit).fill(true);

		this.initVoteCandsClick();
		this.initVoteNotCandsClick();

		this.add.onclick = function() {
			clearTimeout(parent.errTimeOut);
			var text = parent.input.value;
			if (text.length < 2) {
				parent.input.classList.add("invalid");
				parent.errTimeOut = setTimeout(function() {
					parent.input.classList.remove("invalid");
				}, 3000);
			} else {
				parent.input.value = "";
				var elem = document.createElement("div");
				elem.classList.add("vote-variant");
				elem.classList.add("vote-cand");
				elem.classList.add(parent.params.cands);
				var span = document.createElement("span");
				span.classList.add("h2");
				span.classList.add(parent.params.namesElems);
				span.innerHTML = text;
				var num = document.createElement("div");
				num.classList.add("vote-num");
				num.classList.add(parent.params.nums);
				// var btn = document.createElement("button");
				// btn.classList.add("icon-cross");
				// btn.classList.add("close-cand");
				elem.append(span, num/*, btn*/);
				
				parent.parent.append(elem);
				parent.initVoteCandsLink();
				parent.initVoteCandsClick();
			}
		}		
	}

	initVoteCandsLink() {
		this.cands = document.getElementsByClassName(this.params.cands);
		this.namesElems = document.getElementsByClassName(this.params.namesElems);
		this.nums = document.getElementsByClassName(this.params.nums);
		// this.close = document.getElementsByClassName(this.params.close);
		this.names = new Array(this.namesElems.length);
		for (var i = 0; i < this.names.length; i++) {
			const ci = i;
			this.names[ci] = this.namesElems[ci].innerText;
		}
	}

	initVoteCandsClick() {
		var parent = this;
		if (this.order === undefined) {
			this.order = new Array(this.cands.length).fill(false);
		} else {
			this.order.push(false);
		}
		for (var i = 0; i < this.cands.length; i++) {
			const ci = i;
			this.cands[ci].onclick = function() {
				if (parent.whichNotCand != 0) {
					parent.notCands[parent.whichNotCand - 1].classList.remove("active");
					parent.whichNotCand = 0;
				}
				
				if (parent.order[ci] === false ) {
					if (parent.count >= parent.limit) {
						return;
					}
					parent.count++;
					for (var j = 0; j < parent.canUsed.length; j++) {
						const cj = j;
						if (parent.canUsed[cj]) {
							parent.cur = cj;
							parent.canUsed[cj] = false;
							break;
						}
					}
					parent.order[ci] = parent.cur;
					parent.cands[ci].classList.add("active");
					parent.nums[ci].innerHTML = parent.cur + 1 + "st";
					parent.curElem.innerHTML = parent.count;
				} else {
					if (parent.count > 0) {
						parent.count--;
						for (var j = 0; j < parent.order.length; j++) {
							const cj = j;
							if (parent.order[ci] == cj) {
								parent.cur = cj;
								parent.canUsed[cj] = true;
								break;
							}
						}
						parent.order[ci] = false;
						parent.curElem.innerHTML = parent.count;
						parent.cands[ci].classList.remove("active");
					}
				}
				parent.checkNext();
			}
			// this.close[ci].onclick = function(e) {
			// 	e.stopPropagation();
			// 	if (parent.count > 0) {
			// 		parent.count--;
			// 		for (var j = 0; j < parent.order.length; j++) {
			// 			const cj = j;
			// 			if (parent.order[ci] == cj) {
			// 				parent.cur = cj;
			// 				parent.canUsed[cj] = true;
			// 				break;
			// 			}
			// 		}
			// 		parent.order[ci] = false;
			// 		parent.curElem.innerHTML = parent.count;
			// 		parent.cands[ci].classList.remove("active");
			// 	}
			// }
		}
	}

	initVoteNotCandsClick() {
		for (var i = 0; i < this.notCands.length; i++) {
			const ci = i;
			var parent = this;
			this.notCands[ci].onclick = function() {
				for (let j = 0; j < parent.order.length; j++) {
					const cj = j;
					if (parent.order[cj] !== false) {
						parent.order[cj] = false;
						parent.count = 0;
						parent.canUsed.fill(true);
						parent.cands[cj].classList.remove("active");
					}
					parent.curElem.innerHTML = parent.count;
				}
				for (var j = 0; j < parent.notCands.length; j++) {
					const cj = j;
					if (ci != cj) {
						parent.notCands[cj].classList.remove("active");
					}
				}
				if (parent.whichNotCand != ci + 1) {
					parent.whichNotCand = ci + 1;
					parent.notCands[ci].classList.add("active");
				} else {
					parent.notCands[ci].classList.remove("active");
					parent.whichNotCand = 0;
				}
				parent.checkNext();
			}
			// this.notClose[ci].onclick = function(e) {
			// 	e.stopPropagation();
			// 	parent.notCands[ci].classList.remove("active");
			// 	parent.whichNotCand = 0;
			// }
		}
	}

	checkNext() {
		if(this.count != 0 || this.whichNotCand != 0) {
			this.slideParent.classList.add("next");
		} else {
			this.slideParent.classList.remove("next");
		}
	}

	getResult() {
		return this.result;
	}
}

var generalV = undefined;
var nonLeasedV = undefined;
onLoaded.push(function() {
	generalV = new CVote({
		slideParentId: "general-leased",

		curElemId: "vcurrent-gen",

		parentId: "vote-cands-gen",

		cands: "vote-cand-gen",
		namesElems: "vote-name-gen",
		nums: "vote-num-gen",
		// close: "close-cand",

		notCands: "vote-not-cand-gen",
		// notClose: "close-not-cand",

		inputId: "input-optional-cand-gen",
		addId: "button-optional-cand-gen",
	});
	nonLeasedV = new CVote({
		slideParentId: "non-leased",

		curElemId: "vcurrent-non",

		parentId: "vote-cands-non",

		cands: "vote-cand-non",
		namesElems: "vote-name-non",
		nums: "vote-num-non",
		// close: "close-cand",

		notCands: "vote-not-cand-non",
		// notClose: "close-not-cand",

		inputId: "input-optional-cand-non",
		addId: "button-optional-cand-non",
	});
});

var XProxyUpload = undefined;
onLoaded.push(function() {
	XProxyUpload = new DnD({
		blockId: "upblock-doc-upload",
		inputId: "input-doc-upload", 
		formats: ["docx", "pdf", "jpg", "png", "zip"],
		maxSizeMb: 5,
	});
});

onLoaded.push(function() {
	//-b-page-quorum----------------
	var Quorum = {
		elem: undefined,
		elems: undefined,
		next: false,
		attention: undefined,
		isAttention: false,
	};
	Quorum.elem = document.getElementById("quorum");
	Quorum.elems = Quorum.elem.getElementsByClassName("radio");
	Quorum.attention = document.getElementById("quorum-attention");

	Quorum.elems[0].onclick = function() {
		if (!this.getElementsByTagName("input")[0].checked) return;
		if (!Quorum.next) {
			Quorum.elem.classList.add("next");
			Quorum.next = true;
		}
		if(Quorum.isAttention) {
			Quorum.attention.classList.remove("active");
			Quorum.isAttention = false;
		}
	}
	Quorum.elems[1].onclick = function() {
		if (!this.getElementsByTagName("input")[0].checked) return;
		if (Quorum.next) {
			Quorum.elem.classList.remove("next");
			Quorum.next = false;
		}
		if(!Quorum.isAttention) {
			Quorum.attention.classList.add("active");
			Quorum.isAttention = true;
		}
	}
	//-e-page-quorum----------------

	//-b-multiple-units-------------
	var MulUn = {
		elem: undefined,
		elems: undefined,
		next: false,
	};	
	MulUn.elem = document.getElementById("mul-un");
	MulUn.elems = MulUn.elem.getElementsByClassName("radio");
	
	MulUn.elems[0].onclick = function() {
		if (!this.getElementsByTagName("input")[0].checked) return;
		if (!MulUn.next) {
			MulUn.elem.classList.add("next");
			MulUn.next = true;
		}
	}
	MulUn.elems[1].onclick = function() {
		if (!this.getElementsByTagName("input")[0].checked) return;
		if (!MulUn.next) {
			MulUn.elem.classList.add("next");
			MulUn.next = true;
		}
	}
	//-e-multiple-units-------------

	//-b-r-u-owner-non--------------
	var RUOwner = {
		elem: undefined,
		elems: undefined,
		next: false,
	};	
	RUOwner.elem = document.getElementById("r-u-owner-non");
	RUOwner.elems = RUOwner.elem.getElementsByClassName("radio");
	
	RUOwner.elems[0].onclick = function() {
		if (!this.getElementsByTagName("input")[0].checked) return;
		if (!RUOwner.next) {
			RUOwner.elem.classList.add("next");
			RUOwner.next = true;
		}
	}
	RUOwner.elems[1].onclick = function() {
		if (!this.getElementsByTagName("input")[0].checked) return;
		if (!RUOwner.next) {
			RUOwner.elem.classList.add("next");
			RUOwner.next = true;
		}
	}
	//-e-r-u-owner-non--------------
	
	//-b-by-laws--------------------
	var ByLaws = {
		elem: undefined,
		elems: undefined,
		next: false,
	};	
	ByLaws.elem = document.getElementById("by-laws");
	ByLaws.elems = ByLaws.elem.getElementsByClassName("radio");
	for (var i = 0; i < ByLaws.elems.length; i++) {
		const ci = i;
		ByLaws.elems[ci].onclick = function() {
			if (!ByLaws.next) {
				ByLaws.elem.classList.add("next");
				ByLaws.next = true;
			}
		}
	}
	//-e-by-laws--------------------
	
	//-b-holder-1-------------------
	var PHolder1 = {
		elem: undefined,
		elems: undefined,
		next: false,
	};	
	PHolder1.elem = document.getElementById("p-holder-1");
	PHolder1.elems = PHolder1.elem.getElementsByClassName("radio");
	for (var i = 0; i < PHolder1.elems.length; i++) {
		const ci = i;
		PHolder1.elems[ci].onclick = function() {
			if (!this.getElementsByTagName("input")[0].checked) return;
			if (!PHolder1.next) {
				PHolder1.elem.classList.add("next");
				PHolder1.next = true;
			}
		}
	}
	//-e-holder-1-------------------
	
	//-b-holder-2-------------------
	var PHolder2 = {
		elem: undefined,
		elems: undefined,
		next: false,
	};	
	PHolder2.elem = document.getElementById("p-holder-2");
	PHolder2.elems = PHolder2.elem.getElementsByClassName("radio");
	for (var i = 0; i < PHolder2.elems.length; i++) {
		const ci = i;
		PHolder2.elems[ci].onclick = function() {
			if (!this.getElementsByTagName("input")[0].checked) return;
			if (!PHolder2.next) {
				PHolder2.elem.classList.add("next");
				PHolder2.next = true;
			}
		}
	}
	//-e-holder-2-------------------
	
	//-b-doc-upload-----------------
	var DocUpload = {
		elem: undefined,
		elems: undefined,
		next: false,
		file: false,
	};	
	PHolder2.elem = document.getElementById("p-holder-2");
	PHolder2.elems = PHolder2.elem.getElementsByClassName("radio");
	for (var i = 0; i < PHolder2.elems.length; i++) {
		const ci = i;
		PHolder2.elems[ci].onclick = function() {
			if (!this.getElementsByTagName("input")[0].checked) return;
			if (!PHolder2.next) {
				PHolder2.elem.classList.add("next");
				PHolder2.next = true;
			}
		}
	}
	//-e-doc-upload-----------------
});