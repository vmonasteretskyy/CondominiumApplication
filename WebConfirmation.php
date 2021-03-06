<?php include 'head.php'; ?>

<section class="top-text">
	<h2>TSSCC No. 1955 Annual General Meeting for Fascal Year 2018-19</h2>
</section>

<section id="agreement-doc">
	<div class="wrap">
	<h1 class="icon-file">Agreement to Receive Notices Electronically</h1>
	<p>Please review and submit the following form to have future condominium notices delivered via email.</p>
	<p>A copy of this form will be emailed to you upon submission.</p>
	<form action="" method="post" >
		<button class="btn accent" type="submit">Submit</button>
	</form>
	<div class="input-top h3">
		<p>By clicking 'submit', you are agreeing to the terms and conditions set out in the form below. </p>
	</div>

	<div class="wrap">
		<div class="upblock" id="upblock-doc-agreement">
			<input type="file" class="file" id="input-doc-agreement" accept=".docx, .pdf, .jpg, .png, .zip">
			<label for="input-doc-agreement" class="btn dark icon-download">Upload</label>
			<span class="upblock-text">or drag and drop here</span>
		</div>
		<div class="input-top two-elems h3">
			<p>ACCEPTED FORMATS: .DOCX, .PDF, .JPG, .PNG, AND .ZIP (MAX 1 FILE, 5MB)</p>
			<p class="icon-lock">Secure</p>
		</div>
	</div>

	<div class="wrap">
		<div class="form">
			<div class="header-form">
				<div class="logo">
					<div class="logo-img">
						<img src="./assets/img/Ontario-logo.png" alt="">
					</div>
					<div class="descript">
						<p>Ministry of Government and Consumer Services</p>
					</div>
				</div>
				<div class="agree">
					<h1>Agreement to Receive Notices Electronically</h1>
					<p>Agreement by owner or mortgagee to receive notices from the corporation by electronic delivery</p>
				</div>
			</div>
			<form action="index.php">
				<div class="line">
					<div class="label-p">Owner’s or mortgagee’s name (<strong>Optional:</strong> You may, but are not required to, include information with respect to the unit(s) or parcel(s) of tied land, related to this owner or mortgagee.)</div>
					<div class="placeholder">{name1} {name2} - {unit}</div>
				</div>
				<div class="line">
					<div class="label-p">Condominium corporation’s name</div>
					<div class="placeholder">{organizationName}</div>
				</div>
				<div>
					<p>In order for your condominium corporation to enter into this agreement, the board of your corporation must have passed a resolution to determine the methods of electronic communication that it will use for serving notices on owners or morgagees. Before filing out this form, you should consider contacting the corporation to find out what those methods are.</p>
				</div>
				<div>
					<p>Method the corporation will use to deliver notices to me:</p>
					<div class="chek">
						<div>
							<label class="container1">Email
								<input type="checkbox" checked="checked" name="email" disabled>
								<span class="checkmark"></span>
							</label>
						</div>
						<div class="label">
							<div class="email">
								My email address is
							</div>
							<div class="placeholder placeholder2">
								<span class="margin">{email}</span>
							</div>
						</div>
						<div class="chek3">
							<label class="container1">Facsimile
								<input type="checkbox" name="fax" disabled>
								<span class="checkmark"></span>
							</label>
						</div>
						<div class="label">
							<div class="email">
								My fax number is
							</div>
							<div class="placeholder placeholder3">
							</div>
						</div>
						<div class="label chek2">
							<div>
								<label class="container1">Other
									<input type="checkbox" name="other" disabled>
									<span class="checkmark"></span>
								</label>
							</div>
							<div class="placeholder placeholder4">
							</div>
						</div>
					</div>
				</div>
				<div class="Iagree">
					<p>
						<label class="container1">I agree that I am sufficiently served, as described in section 54 of the Condominium Act, 1998, if the corporation uses the method of delivering notices identified in this agreement.
							<input type="checkbox" checked="checked" name="agree" disabled>
							<span class="checkmark"></span>
						</label>
					</p>
					<p class="Iagree2">
						<label class="container1">I agree to the Quorum IQ Terms of Service and Privacy Policy, and approve the electronic representation of my signature for use when signing this document.
							<input type="checkbox" checked="checked" name="agree2" disabled>
							<span class="checkmark"></span>
						</label>
					</p>
				</div>
				<div class="signatures">
					<div class="column1">
						<div>
							<div class="placeholder">{name1} {name2} {name3}</div>
							<div>Signature of owner or mortgagee</div>
						</div>
						<div class="column-signature2">
							<div class="placeholder">{name1} {name2} {name3}</div>
							<div>Signature of individual on behalf of the<br /> condominium corporation</div>
						</div>
						<div class="column-signature2">
							<div class="placeholder"></div>
							<div>Signature of individual on behalf of the<br /> condominium corporation</div>
						</div>
					</div>
					<div class="column2">
						<div>
							<div class="placeholder">{date}</div>
							<div>Date (yyyy/mm/dd)</div>
						</div>
						<div class="column-date2">
							<div class="placeholder">{date}</div>
							<div>Date (yyyy/mm/dd)</div>
						</div>
						<div class="column-date3">
							<div class="placeholder"></div>
							<div>Date (yyyy/mm/dd)</div>
						</div>
					</div>
				</div>
				<div>
					<p>Please affix the corporate seal or add a statement below that the person signing has the authority to bind the corporation.</p>
					<p> <em>&bull; As the contracted Property Manager for TSCC No. 1955, the person signing has the authority to bind.</em></p>
				</div>
				<div class="dated">
					<div>
						Dated this
					</div>
					<div>
						<div class="placeholder">{day}</div>
						<div class="day">day of month</div>
					</div>
					<div>
						day of
					</div>
					<div>
						<div class="placeholder">{month}</div>
						<div class="month">month</div>
					</div>
					<div>
						,
					</div>
					<div>
						<div class="placeholder">{year}</div>
						<div class="year">year</div>
					</div>
					<div>
						.
					</div>
				</div>
			</form>
		</div>
	</div>
</section>


<script src="./assets/scripts/WebConfirmation.js"></script>

<?php include 'bottom.php'; ?>