import React from "react";

function Inputdiv({ markdown, updateMarkdown }) {
	const inputStyle = {
		display: "block",
		marginLeft: " auto",
		marginRight: "auto",
	};
	return (
		<div className="container">
			<textarea
				style={inputStyle}
				name="markdown"
				cols="90"
				rows="20"
				value={markdown}
				onChange={updateMarkdown}
			/>
		</div>
	);
}

export default Inputdiv;
