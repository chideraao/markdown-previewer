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
				placeholder="# heading
				## This is a sub-heading...
				` single-line code` 
				```
				multi-line code
				``` 
				**bold**
				_italic_
				~~crossing stuff out~~
				> Block Quotes!"
			/>
		</div>
	);
}

export default Inputdiv;
