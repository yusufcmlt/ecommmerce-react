import React from "react";

import "./CustomInput.style.scss";

export const CustomInput = ({
  inputType,
  inputPlaceholder,
  inputName,
  inputIcon,
}) => {
  return (
    <div className="input-container">
      {inputIcon ? (
        <div className={`input-icon input-icon-${inputIcon}`} />
      ) : null}
      <input
        className="custom-input border-radius-10 input-stroke"
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        required
      />
    </div>
  );
};
