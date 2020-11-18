import React from "react";
let marked = require("marked");

function MarkupDisplay({ markdown }) {
	let markup = marked(markdown);

	let markdownStyle = {
		backgroundColor: "#CCC",
		padding: "2rem",
		height: " auto",
		overflow: "auto",
	};
	return (
		<div className="container">
			<div
				style={markdownStyle}
				dangerouslySetInnerHTML={{ __html: markup }}
			></div>
		</div>
	);
}

export default MarkupDisplay;
