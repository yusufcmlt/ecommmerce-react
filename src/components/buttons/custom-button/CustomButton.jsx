import React from "react";
import "./CustomButton.style.scss";
export default function CustomButton({
  buttonType,
  buttonText,
  buttonSize,
  funcOnPress,
  buttonState,
  buttonIcon,
  selectedMenuButton,
  buttonMouseOver,
  buttonOut,
  buttonInfo,
}) {
  return (
    <button
      className={`${
        selectedMenuButton ? "selected" : ""
      } size-${buttonSize} app-custom-button border-radius-5`}
      style={{
        fontWeight: "500",
        textIndent: buttonIcon ? "15px" : "0",
      }}
      type={buttonType}
      onClick={funcOnPress}
      disabled={buttonState}
      onMouseOver={buttonMouseOver}
      onMouseOut={buttonOut}
    >
      <span className="button-info-admin">{buttonInfo}</span>
      <span className={`button-icon button-icon-${buttonIcon}`} />
      {buttonText}
    </button>
  );
}
