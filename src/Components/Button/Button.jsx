import React from "react";
import "./Button.css";

export default function Button({
  title,
  hrefTo,
}) {
  return (
    <a
      href={hrefTo}
      className="button__block-button"
      rel="noopener noreferrer"
    >
      <p className="button__block-button_text">
        {title}
      </p>
    </a>
  );
}
