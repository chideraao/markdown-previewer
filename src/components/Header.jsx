import React from "react";

function Header() {
	const headerStyle = {
		backgroundColor: "#495464",
		color: "#e8e8e8",
		borderRadius: "6px",
		padding: "1rem",
	};

	return (
		<div className="container">
			<h1 style={headerStyle}>Markdown Previewer</h1>
		</div>
	);
}

export default Header;
