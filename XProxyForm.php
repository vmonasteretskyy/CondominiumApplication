<?php include 'head.php'; ?>

<section class="popup" id="non-leased-popup">
	<div class="popup-wrap">
		<p><b>The non-leased voting unit director position </b> on the board is reserved for voting by owners of non-leased units.</p>
		<button type="button" class="btn accent close-popup">Got it</button>
	</div>
</section>

<section class="top-text">
	<h2 class="white">TSSCC No. 1955 Annual General Meeting for Fascal Year 2018-19</h2>
</section>

<section class="left">
	<div class="left-top">
		<p>Complete your electronic proxy form</p>
	</div>
	<div class="left-pr">
		<!-- begin press element -->
		<div class="left-pr-elem checked">
			<div class="left-pr-elem-icon icon-check"></div>
			<span class="h2">Step 1</span>
			<span class="smaller gray">Overview</span>
		</div>
		<!-- end press element -->
		<!-- begin press element -->
		<div class="left-pr-elem">
			<div class="left-pr-elem-icon icon-check"></div>
			<span class="h2">Step 2</span>
			<span class="smaller gray">Voting</span>
		</div>
		<!-- end press element -->
		<!-- begin press element -->
		<div class="left-pr-elem">
			<div class="left-pr-elem-icon icon-check"></div>
			<span class="h2">Step 3</span>
			<span class="smaller gray">Finish</span>
		</div>
		<!-- end press element -->
	</div>
	<span id="progress-status" class="smaller gray">All progress saved</span>
</section>

<section class="right">
	<div class="right-top">
		<i class="icon-info"></i>
		<span class="h2">Help</span>
	</div>
	<div class="right-hq">
		<div class="right-hq-title">
			<span class="h2">Have question?</span>
			<button type="button" class="icon-cross" id="right-close"></button>
		</div>
		<div class="right-hq-row">
			<i class="icon-mail"></i>
			<span class="h2">Email</span>
			<a href="mailto:@tscc1955@iconpm.ca">tscc1955@iconpm.ca</a>
		</div>
		<div class="right-hq-row">
			<i class="icon-phone"></i>
			<span class="h2">Call</span>
			<a href="tel:(416)342-0416">(416)342-0416</a>
		</div>
	</div>
</section>

<section class="xproxyform">
	<div class="wrap">
		<h1 class="icon-non-leased">Non-leased unit election</h1>
		<p>Which cand(s) do you vote to elect for the &#60;<a class="link" onclick="openPopup('non-leased-popup')">non-leased voting unit director position</a>&#62; <i class="icon-info-hovering"></i> on the board?</p>
		<div class="vote-top">
			<p class="smaller gray uppercase bold">You may vote for up to 0 cand(s)</p>
			<p class="smaller gray uppercase bold"><span id="vote-current">0</span><span id="vote-limit">2</span> votes remaining</p>
		</div>
		<div class="vote-variants">
			<div class="vote-cands" data-vote-limit="2">

				<!-- begin cand example -->
				<div class="vote-variant vote-cand">
					<span class="h2">Anthony Ing</span>
					<div class="vote-num"></div>
					<button type="button" class="icon-cross close-cand"></button>
				</div>
				<!-- end cand example -->
				<!-- begin cand example -->
				<div class="vote-variant vote-cand">
					<span class="h2">Shirley Wang</span>
					<div class="vote-num"></div>
					<button type="button" class="icon-cross close-cand"></button>
				</div>
				<!-- end cand example -->
				<!-- begin cand example -->
				<div class="vote-variant vote-cand">
					<span class="h2">Sutha Somasundaram</span>
					<div class="vote-num"></div>
					<button type="button" class="icon-cross close-cand"></button>
				</div>
				<!-- end cand example -->

			</div>

			<!-- begin cand example -->
			<div class="vote-variant vote-not-cand">
				<span class="h2">I decline to vote</span>
				<button type="button" class="icon-cross close-not-cand"></button>
			</div>
			<!-- end cand example -->
			<!-- begin cand example -->
			<div class="vote-variant vote-not-cand">
				<span class="h2">I authorize my proxy to vote on my behalf at the meeting</span>
				<button type="button" class="icon-cross close-not-cand"></button>
			</div>
			<!-- end cand example -->

		</div>
		<div class="vote-top">
			<p class="smaller gray uppercase bold">Write-in cand (optional)</p>
		</div>
		<div class="vote-optional">
			<input type="text" placeholder="Full name" id="input-optional-cand">
			<button type="button" class="btn dark" id="button-optional-cand">Add</button>
		</div>
		<div class="btns-back-next">
			<button class="btn security icon-arr-l votenav-prev">Back</button>
			<div class="votenav-progress">
				<div class="votenav-text">
					<span class="votenav-counter">1</span>
					<span class="votenav-limit">3</span>
				</div>
				<div class="votenav-hider">
					<div class="votenav-bar"></div>
				</div>
			</div>
			<button class="btn accent icon-arr-l votenav-next">Next step</button>
		</div>
	</div>
</section>

<script src="./assets/scripts/xproxyform.js"></script>

<?php include 'bottom.php'; ?>