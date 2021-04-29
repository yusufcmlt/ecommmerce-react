import React from "react";
import "./CustomButton.style.scss";
export default function CustomButton({
  buttonType,
  buttonColor,
  buttonText,
  textColor,
  funcOnPress,
  buttonState,
  buttonIcon,
}) {
  return (
    <button
      className="app-custom-button border-radius-10"
      style={{
        color: textColor,
        backgroundColor: buttonState ? "gray" : buttonColor,
        fontSize: buttonIcon ? "14px" : "18px",
        fontWeight: buttonIcon ? "600" : "500",
      }}
      type={buttonType}
      onClick={funcOnPress}
      disabled={buttonState}
    >
      <span className={`button-icon button-icon-${buttonIcon}`} />
      {buttonText}
    </button>
  );
}
