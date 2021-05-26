import React from "react";

import "./CustomSelect.style.scss";

export default function CustomSelect({
  size,
  options,
  selectName,
  selectOnChange,
}) {
  return (
    <select
      name={selectName}
      className={`custom-select-container ${size} input-stroke`}
      onChange={selectOnChange}
    >
      <option key="9293932" defaultValue value="">
        {" "}
        -- Seçiniz --{" "}
      </option>
      {options.map((option) => (
        <option key={`option-${option.value}`} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
