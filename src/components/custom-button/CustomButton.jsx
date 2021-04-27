import React from "react";
import "./CustomButton.style.scss";
export default function CustomButton({
  buttonType,
  buttonColor,
  buttonText,
  textColor,
  funcOnPress,
  buttonState,
}) {
  return (
    <button
      className="app-custom-button border-radius-10"
      style={{
        color: textColor,
        backgroundColor: buttonState ? "gray" : buttonColor,
      }}
      type={buttonType}
      onClick={funcOnPress}
      disabled={buttonState}
    >
      {buttonText}
    </button>
  );
}
