import React, { useEffect, useState } from "react";
import PageTitleHeader from "../../components/page-title-header/PageTitleHeader";

import "./AddressPage.style.scss";
import AddressSideMenu from "./AddressSideMenu";
import AdressList from "./AdressList";

export default function AddressPage() {
  const [selectedAddress, setSelectedAddress] = useState({});
  const [isAddressSelected, setIsAddressSelected] = useState(false);

  function handleSelectedAddress(addressInfo = {}) {
    if (isAddressSelected) {
      setSelectedAddress({});
      setIsAddressSelected(false);
    } else {
      setSelectedAddress({ ...addressInfo });
      setIsAddressSelected(true);
    }
  }

  return (
    <section id="address-page-section">
      <PageTitleHeader
        pageTitle="Adreslerim"
        pageIcon="address"
        pageType="normal"
      />
      <div className="address-page-container">
        <AdressList
          handleSelectedAddress={handleSelectedAddress}
          selectedAddress={selectedAddress}
        />
        <AddressSideMenu
          selectedAddress={selectedAddress}
          isAddressSelected={isAddressSelected}
          handleSelectedAddress={handleSelectedAddress}
        />
      </div>
    </section>
  );
}
