import React from "react";
import "./styles.css";

function Button({ text, outlined }) {
  return (
    <div
      className={outlined ? "btn-outlined" : "btn"}
      // onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default Button;
