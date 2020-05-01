<?php include 'head.php'; ?>

<section class="login">
	<div class="wrap">
		<div class="page-top">
			<div class="icon-login"></div>
			<span class="h1">Login</span>
			<p>Enter your details below</p>
		</div>
		<div class="login-form-wrap">
			<form class="bg-gray">
				<div class="input-top h3">
					<p>Email address</p>
				</div>
				<input type="email" name="email" placeholder="Enter your email">
				
				<div class="input-top h3">
					<p>Password</p>
				</div>
				<div class="input">
					<input type="password" name="password" placeholder="Enter your password">
					<button class="icon-eye" type="button"></button>
				</div>
				<button class="btn accent" type="submit">Sign in</button>
			</form>
		</div>
	</div>
</section>

<section class="forgot-pswd">
	<div class="popup-wrap">
		<div class="forgot-top">
			<span class="h1">Forgot your password?</span>
			<p>We'll help you reset it</p>
		</div>
		<div class="forgot-form">
			<form>
				<div class="input-top h3">
					<p>Email address</p>
				</div>
				<input type="email" name="email" placeholder="Enter your email">
				<div class="form-row">
					<button class="btn security" type="button">Back</button>
					<button class="btn accent" type="submit">Reset password</button>
				</div>
			</form>
		</div>
	</div>
</section>

<section class="popup" id="non-leased-popup">
	<div class="popup-wrap">
		<p><b>The non-leased voting unit director position </b> on the board is reserved for voting by owners of non-leased units.</p>
		<button type="button" class="btn accent close-popup">Got it</button>
	</div>
</section>



<!-- begin-page -------------------------------------------------------------------->
<section class="lcypv active">
	<div class="wrap">
		<div class="page-top">
			<div class="icon-file"></div>
			<span class="h1">Let's cast your proxy vote!</span>
			<p>This will rake about 60 seconds.</p>
		</div>
		<div class="page-mid">
			<span class="h3">Online submissions will close on Tuesday March 24, 2020 at 7:00pm</span>
			<button type="button" class="btn accent" id="lcypv-btn">Start</button>
			<button type="button" class="link smaller" id="idwtv-btn">I don't want to vote</button>
		</div>
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
		<div class="left-pr-elem">
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
	<div class="right-top parent-calc-h hidden" id="right-help-accordion">
		<div class="right-top-inner calc-h">
			<div class="row">
				<i class="icon-info"></i>
				<span class="h2">Help</span>
				<button type="button" class="icon-cross accordion-close"></button>
			</div>
			<p><b>The non-leased voting unit director position</b> on the board is reserved for voting by owners of non-leased units.</p>
		</div>
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

<section class="osanc">
	<div class="wrap">
		<h1 class="icon-closed">Online Submition are now closed</h1>
		<p>To vote, please attend the event in person or contact the management office.</p>
		<div class="block">
			<span class="h2">TSCC No. 1955 Annual General Meeting</span>
			<div class="h2-group">
				<span class="h2">When</span>
				<span>Tuesday, January 21st, 2020</span>
				<span>12:00 am EST</span>
			</div>
			<div class="h2-group">
				<span class="h2">Where</span>
				<span>27 Floor Sky Lounge, 11 Brunel Court, Toronto, ON M5V 3Y6</span>
			</div>
		</div>
	</div>
</section>

<section class="xproxyform">
	<div id="pg-slider-hider">
		<div id="pg-slider">

			<!-- begin-page-slide -->
			<div class="pg-elem next">
				<div class="wrap">
					<h1 class="icon-forum">Quorum</h1>
				</div>
				<div class="wrap">
					<div class="btns-back-next">
						<button class="btn security icon-arr-l pgnav-prev">Back</button>
						<button class="btn accent icon-arr-l pgnav-next">Next step</button>
					</div>
				</div>
			</div>
			<!-- end-page-slide -->

			<!-- begin-page-slide -->
			<div class="pg-elem">
				<div class="wrap">
					<h1 class="icon-non-leased">Non-leased unit election</h1>
					<p>Which cand(s) do you vote to elect for the <a class="slink" onclick="openHPopup('right-help-accordion', 'non-leased-popup')"><span class="bef"><</span><span class="sunderline">non-leased voting unit director position</span><span class="aft">></span> <i class="icon-info-hovering"></i></a> on the board</p>
					
					<div class="input-top h3">
						<p>You may vote for up to 0 cand(s)</p>
						<p><span id="vcurrent-non">0</span><span id="vote-limit">2</span> votes remaining</p>
					</div>
					<div class="vote-variants">
						<div class="vote-cands vote-cands-non" data-vote-limit="2">

							<!-- begin cand example -->
							<div class="vote-variant vote-cand vote-cand-non">
								<span class="h2 vote-name-non">Anthony Ing</span>
								<div class="vote-num vote-num-non"></div>
								<!-- <button type="button" class="icon-cross close-cand"></button> -->
							</div>
							<!-- end cand example -->
							<!-- begin cand example -->
							<div class="vote-variant vote-cand vote-cand-non">
								<span class="h2 vote-name-non">Shirley Wang</span>
								<div class="vote-num vote-num-non"></div>
								<!-- <button type="button" class="icon-cross close-cand"></button> -->
							</div>
							<!-- end cand example -->
							<!-- begin cand example -->
							<div class="vote-variant vote-cand vote-cand-non">
								<span class="h2 vote-name-non">Sutha Somasundaram</span>
								<div class="vote-num vote-num-non"></div>
								<!-- <button type="button" class="icon-cross close-cand"></button> -->
							</div>
							<!-- end cand example -->

						</div>

						<!-- begin cand example -->
						<div class="vote-variant vote-not-cand vote-not-cand-non">
							<span class="h2">I decline to vote</span>
							<!-- <button type="button" class="icon-cross close-not-cand"></button> -->
						</div>
						<!-- end cand example -->
						<!-- begin cand example -->
						<div class="vote-variant vote-not-cand vote-not-cand-non">
							<span class="h2">I authorize my proxy to vote on my behalf at the meeting</span>
							<!-- <button type="button" class="icon-cross close-not-cand"></button> -->
						</div>
						<!-- end cand example -->

					</div>
					<div class="input-top h3">
						<p>Write-in cand (optional)</p>
					</div>
					<div class="vote-optional">
						<input type="text" placeholder="Full name" id="input-optional-cand-non">
						<button type="button" class="btn dark" id="button-optional-cand-non">Add</button>
					</div>
				</div>
				<div class="wrap">
					<div class="btns-back-next">
						<button class="btn security icon-arr-l pgnav-prev">Back</button>
						<div class="votenav-progress">
							<div class="votenav-text">
								<span class="votenav-counter">1</span>
								<span class="votenav-limit">3</span>
							</div>
							<div class="votenav-hider">
								<div class="votenav-bar"></div>
							</div>
						</div>
						<button class="btn accent icon-arr-l pgnav-next">Next step</button>
					</div>
				</div>
			</div>
			<!-- end-page-slide -->

		</div>
	</div>
</section>

<script src="./assets/scripts/xproxyform.js"></script>

<?php include 'bottom.php'; ?>