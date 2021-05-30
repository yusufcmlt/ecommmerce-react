import React from "react";

import "./CustomInput.style.scss";

const CustomInput = ({
  inputChange,
  inputType,
  inputPlaceholder,
  inputName,
  inputIcon,
  inputSize = "normal",
  ...props
}) => {
  return (
    <div className={`input-container`}>
      {inputIcon ? (
        <div className={`input-icon input-icon-${inputIcon}`} />
      ) : null}
      <input
        className={`custom-input custom-input-${inputSize} border-radius-10 input-stroke`}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={inputChange}
        required
        {...props}
      />
    </div>
  );
};

export default CustomInput;
