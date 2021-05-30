import React from "react";

import "./AddressPage.style.scss";

export default function AddressItem({ data, ...props }) {
  const { name, firstName, address } = data;
  return (
    <div
      className={`address-item ${props.selected ? "selected" : ""}`}
      onClick={() => {
        if (props.handleSelectedAddress) {
          props.handleSelectedAddress(data);
        }
      }}
    >
      <div className="address-icon" />
      <div className="address-info">
        <h4>{name}</h4>
        <div>
          <p>{firstName}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
}
