import React from "react";
let marked = require("marked");

function MarkupDisplay({ markdown }) {
  let markup = marked(markdown);

  let markdownStyle = {
    backgroundColor: "#CCC",
    padding: "2rem",
    paddingTop: "1rem",
    minHeight: " 72vh",
    maxHeight: "auto",
    width: "97%",
    marginBottom: "1.5rem",
    marginLeft: " auto",
    marginRight: "auto",
    overflow: "auto",
    borderRadius: "8px",
    lineHeight: 1.5,
  };
  return (
    <div className="container markup">
      <div
        className="markdown"
        style={markdownStyle}
        dangerouslySetInnerHTML={{ __html: markup }}
      ></div>
    </div>
  );
}

export default MarkupDisplay;
