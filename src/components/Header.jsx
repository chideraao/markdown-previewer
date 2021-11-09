import React from "react";

function Header() {
  const headerStyle = {
    backgroundColor: "#495464",
    color: "#e8e8e8",
    padding: "1rem 0",
    marginBottom: "1rem",
  };

  return (
    <div style={headerStyle} className="">
      <div className="container">
        <h1>Markdown Previewer</h1>
      </div>
    </div>
  );
}

export default Header;
