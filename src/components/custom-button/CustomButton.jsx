import React from "react";
import "./CustomButton.style.scss";
export default function CustomButton({
  buttonColor,
  buttonText,
  textColor,
  funcOnPress,
}) {
  return (
    <button
      className="app-custom-button border-radius-10"
      style={{ color: textColor, backgroundColor: buttonColor }}
      type="button"
    >
      {buttonText}
    </button>
  );
}
