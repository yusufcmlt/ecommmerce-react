import React from "react";
import "./CustomButton.style.scss";
export default function CustomButton({
  buttonType,
  buttonColor,
  buttonText,
  buttonSize,
  textColor,
  funcOnPress,
  buttonState,
  buttonIcon,
  selectedMenuButton,
}) {
  return (
    <button
      className={`${
        selectedMenuButton && "selected"
      } size-${buttonSize} app-custom-button border-radius-5`}
      style={{
        color: textColor,
        backgroundColor: buttonState ? "gray" : buttonColor,
        fontWeight: "500",
        textIndent: buttonIcon ? "15px" : "0",
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
