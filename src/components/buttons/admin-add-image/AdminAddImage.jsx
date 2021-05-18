import React from "react";

import "./AdminAddImage.style.scss";

export default function AdminAddImage({ text, image, onChangeFunc }) {
  return (
    <div className="add-image-button box-shadow-rule">
      <input
        id="upload-image"
        type="file"
        accept="image/png, image/jpeg, image/webp"
        onChange={onChangeFunc}
        required
      />
      <label
        htmlFor="upload-image"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(255, 255, 255, 0.40), rgba(255,255,255,0.6)), url(${image})`,
        }}
      >
        <span className="add-image-icon" />
        {text}
      </label>
    </div>
  );
}
