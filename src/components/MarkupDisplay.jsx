import React from "react";
let marked = require("marked");

function MarkupDisplay({ markdown }) {
	let markup = marked(markdown);

	let markdownStyle = { backgroundColor: "#CCC" };
	return (
		<div
			style={markdownStyle}
			dangerouslySetInnerHTML={{ __html: markup }}
		></div>
	);
}

export default MarkupDisplay;
