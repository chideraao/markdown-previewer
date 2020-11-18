import React from "react";

function ToggleButton({ toggleSelected, selected }) {
	const toggleStyle = { display: "flex" };
	return (
		<div className="container" style={toggleStyle}>
			<div className="toggle-container" onClick={toggleSelected}>
				<div className={`dialog-button ${selected ? "" : "disabled"}`}>
					{selected ? (
						<div style={{ height: "16px" }}></div>
					) : (
						<div style={{ height: "16px" }}></div>
					)}
				</div>
			</div>
			{selected ? "Edit" : "Preview"}
		</div>
	);
}

export default ToggleButton;
