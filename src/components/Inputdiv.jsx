import React from "react";

function Inputdiv({ markdown, updateMarkdown }) {
	return (
		<div>
			<textarea value={markdown} onChange={updateMarkdown} />
		</div>
	);
}

export default Inputdiv;
