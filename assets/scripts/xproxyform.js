class PgSlider {
	constructor(params = {
		hiderId: undefined,
		sliderId: undefined,
		slides: undefined,
		prevs: undefined,
		nexts: undefined,
		conts: undefined,
	}) {
		this.params = params;
		this.hider = document.getElementById(this.params.hiderId);
		this.slider = document.getElementById(this.params.sliderId);
		this.slides = document.getElementsByClassName(this.params.slides);
		this.prevs = document.getElementsByClassName(this.params.prevs);
		this.nexts = document.getElementsByClassName(this.params.nexts);
		this.conts = document.getElementsByClassName(this.params.conts);

		this.amount = this.slides.length;
		this.allowNext = new Array(this.amount);
		
		console.log(this)

		for (var i = 0; i < this.prevs.length; i++) {
			const ci = i;
			var parent = this;
			this.prevs[ci].onclick = function() {

			}
			
		}

		for (var i = 0; i < this.nexts.length; i++) {
			const ci = i;
			var parent = this;
			this.nexts[ci].onclick = function() {

			}
			
		}

		for (var i = 0; i < this.conts.length; i++) {
			const ci = i;
			var parent = this;
			this.conts[ci].onclick = function() {

			}
			
		}
	}
}

var pgSlider = undefined;
onLoaded.push(function() {
	pgSlider = new PgSlider({
		hiderId: "pg-slider-hider",
		sliderId: "pg-slider",
		slides: "pg-slide",
		prevs: "pgnav-prev",
		nexts: "pgnav-next",
		conts: "pg-cont",
	});
});

class CVote {
	constructor(params = {
		curElemId: undefined,

		parent: undefined,

		cands: undefined,
		namesElems: undefined,
		nums: undefined,
		close: undefined,

		notCands: undefined,
		notClose: undefined,

		inputId: undefined,
		addId: undefined,
	}) {
		if (!params.curElemId || !params.parent || !params.cands) {console.warn("Can't init page slider");return;}
		this.params = params;

		this.whichNotCand = 0;
		this.cur = 0;
		this.count = 0;
		this.limit = 0;

		this.names = undefined;
		this.order = undefined;

		this.timeOut = undefined;

		this.result = undefined;

		this.parent = document.getElementsByClassName(this.params.parent)[0];
		this.initVoteCandsLink();
		this.curElem = document.getElementById(this.params.curElemId);
		this.notCands = document.getElementsByClassName(this.params.notCands);
		this.notClose = document.getElementsByClassName(this.params.notClose);

		this.input = document.getElementById(this.params.inputId);
		this.add = document.getElementById(this.params.addId);
		this.limit = +this.parent.dataset.voteLimit;
		this.canUsed = new Array(this.limit).fill(true);

		this.initVoteCandsClick();
		this.initVoteNotCandsClick();

		this.add.onclick = function() {
			clearTimeout(this.errTimeOut);
			var text = this.input.value;
			if (this.length < 2) {
				this.input.classList.add("invalid");
				this.errTimeOut = setTimeout(function() {
					this.input.classList.remove("invalid");
				}, 3000);
			} else {
				this.input.value = "";
				var elem = document.createElement("div");
				elem.classList.add("vote-variant");
				elem.classList.add("vote-cand");
				var span = document.createElement("span");
				span.classList.add("h2");
				span.innerHTML = text;
				var num = document.createElement("div");
				num.classList.add("vote-num");
				var btn = document.createElement("button");
				btn.classList.add("icon-cross");
				btn.classList.add("close-cand");
				elem.append(span, num, btn);
				
				this.parent.append(elem);
				this.initVoteCandsLink();
				this.initVoteCandsClick();
			}
		}		
	}

	initVoteCandsLink() {
		this.cands = document.getElementsByClassName(this.params.cands);
		this.namesElems = document.getElementsByClassName(this.params.namesElems);
		this.nums = document.getElementsByClassName(this.params.nums);
		this.close = document.getElementsByClassName(this.params.close);
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
				if (parent.count < parent.limit) {
					if (parent.order[ci] === false) {
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
					}
				}
			}
			this.close[ci].onclick = function(e) {
				e.stopPropagation();
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
		}
	}

	initVoteNotCandsClick() {
		for (var i = 0; i < this.notCands.length; i++) {
			const ci = i;
			var parent = this;
			this.notCands[ci].onclick = function() {
				parent.whichNotCand = ci + 1;
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
				parent.notCands[ci].classList.add("active");
			}
			this.notClose[ci].onclick = function(e) {
				e.stopPropagation();
				parent.notCands[ci].classList.remove("active");
				parent.whichNotCand = 0;
			}
		}
	}

	getResult() {
		return;
	}
}

var VL = undefined;
onLoaded.push(function() {
	VL = new CVote({
		curElemId: "vote-current",

		parent: "vote-cands",

		cands: "vote-cand",
		namesElems: "vote-name",
		nums: "vote-num",
		close: "close-cand",

		notCands: "vote-not-cand",
		notClose: "close-not-cand",

		inputId: "input-optional-cand",
		addId: "button-optional-cand",
	});
});