import React from "react";

function Footer() {
  return (
    <div>
      <p>
        &copy;2020
        <span>
          {" "}
          Made with &#x2764;&#xfe0f; &nbsp; by{" "}
          <a
            href="https://dhera.dev/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            Chidera Okeke
          </a>
        </span>
      </p>
    </div>
  );
}

export default Footer;
