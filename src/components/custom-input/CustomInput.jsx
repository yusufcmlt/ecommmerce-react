import React from "react";

import "./CustomInput.style.scss";

export const CustomInput = ({
  inputChange,
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
        onChange={inputChange}
        required
      />
    </div>
  );
};
