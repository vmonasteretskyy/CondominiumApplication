var Vote = {
	paret: undefined,
	cands: undefined,
	notCands: undefined,
	whichNotCand: 0,
	nums: undefined,
	close: undefined,
	notClose: undefined,
	curElem: undefined,
	cur: 0,
	count: 0,
	limit: 0,
	order: undefined,
	canUsed: undefined,
	timeOut: undefined,
	errTimeOut: undefined,
	names: undefined,
	result: undefined,
}
onLoaded.push(function() {
	Vote.curElem = document.getElementById("vote-current");
	Vote.paret = document.getElementsByClassName("vote-cands")[0];
	function initVoteCandsLink() {
		Vote.cands = document.getElementsByClassName("vote-cand");
		Vote.nums = document.getElementsByClassName("vote-num");
		Vote.close = document.getElementsByClassName("close-cand");
	}
	initVoteCandsLink();
	Vote.notCands = document.getElementsByClassName("vote-not-cand");
	Vote.notClose = document.getElementsByClassName("close-not-cand");

	Vote.input = document.getElementById("input-optional-cand")
	Vote.add = document.getElementById("button-optional-cand")

	Vote.limit = +Vote.paret.dataset.voteLimit;
	Vote.canUsed = new Array(Vote.limit).fill(true);

	function initVoteCandsClick() {
		if (Vote.order === undefined) {
			Vote.order = new Array(Vote.cands.length).fill(false);
		} else {
			Vote.order.push(false);
		}
		Vote.names = new Array(Vote.cands.length).fill("");
		for (var i = 0; i < Vote.cands.length; i++) {
			const ci = i;
			Vote.names[ci] = Vote.cands[ci].getElementsByClassName("h2")[0].innerHTML;
			Vote.cands[ci].onclick = function() {
				if (Vote.whichNotCand != 0) {
					Vote.notCands[Vote.whichNotCand - 1].classList.remove("active");
					Vote.whichNotCand = 0;
				}
				if (Vote.count < Vote.limit) {
					if (Vote.order[ci] === false) {
						Vote.count++;
						for (var j = 0; j < Vote.canUsed.length; j++) {
							const cj = j;
							if (Vote.canUsed[cj]) {
								Vote.cur = cj;
								Vote.canUsed[cj] = false;
								break;
							}
						}
						Vote.order[ci] = Vote.cur;
						Vote.cands[ci].classList.add("active");
						Vote.nums[ci].innerHTML = Vote.cur + 1 + "st";
						Vote.curElem.innerHTML = Vote.count;
					}
				}
			}
			Vote.close[ci].onclick = function(e) {
				e.stopPropagation();
				if (Vote.count > 0) {
					Vote.count--;
					for (var j = 0; j < Vote.order.length; j++) {
						const cj = j;
						if (Vote.order[ci] == cj) {
							Vote.cur = cj;
							Vote.canUsed[cj] = true;
							break;
						}
					}
					Vote.order[ci] = false;
					Vote.curElem.innerHTML = Vote.count;
					Vote.cands[ci].classList.remove("active");
				}
			}
		}
	}
	initVoteCandsClick();

	for (var i = 0; i < Vote.notCands.length; i++) {
		const ci = i;
		Vote.notCands[ci].onclick = function() {
			Vote.whichNotCand = ci + 1;
			for (let j = 0; j < Vote.order.length; j++) {
				const cj = j;
				if (Vote.order[cj] !== false) {
					Vote.order[cj] = false;
					Vote.count = 0;
					Vote.canUsed.fill(true);
					Vote.cands[cj].classList.remove("active");
				}
				Vote.curElem.innerHTML = Vote.count;
			}
			for (var j = 0; j < Vote.notCands.length; j++) {
				const cj = j;
				if (ci != cj) {
					Vote.notCands[cj].classList.remove("active");
				}
			}
			Vote.notCands[ci].classList.add("active");
		}
		Vote.notClose[ci].onclick = function(e) {
			e.stopPropagation();
			console.log(Vote.notClose[ci], Vote.notCands[ci])
			Vote.notCands[ci].classList.remove("active");
			Vote.whichNotCand = 0;
		}
	}

	Vote.add.onclick = function() {
		console.log("click")
		clearTimeout(Vote.errTimeOut);
		var text = Vote.input.value;
		if (text.length < 2) {
			Vote.input.classList.add("invalid");
			Vote.errTimeOut = setTimeout(function() {
				Vote.input.classList.remove("invalid");
			}, 3000);
		} else {
			Vote.input.value = "";
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
			
			Vote.paret.append(elem);
			initVoteCandsLink();
			initVoteCandsClick();
		}
	}
});