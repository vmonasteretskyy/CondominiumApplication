var AppendDocument = undefined;
onLoaded.push(function() {
	AppendDocument = new DnD({
		blockId: "upblock-doc-agreement",
		inputId: "input-doc-agreement",
		formats: ["docx", "pdf", "jpg", "png", "zip"],
		maxSizeMb: 5,
	});
});