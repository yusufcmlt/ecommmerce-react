import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";

import CustomButton from "../../components/buttons/custom-button/CustomButton";
import CustomInput from "../../components/custom-input/CustomInput";
import Loading from "../../components/loading/Loading";
import { useAuth } from "../../contexts/auth-context/AuthContext";

import {
  addProductToCart,
  getIndividualProduct,
} from "../../firebase/firebase";

import "./ProductPage.style.scss";

export default function ProductPage() {
  const { productID } = useParams();
  const { currentUser } = useAuth();

  const [productData, setProductData] = useState({ loaded: false, data: {} });
  const [selectedProductQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    if (!productData.loaded) {
      getIndividualProduct(productID)
        .then((product) => {
          setProductData({ loaded: true, data: { ...product } });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  function handleCartAdd(event) {
    event.preventDefault();
    const { id, imageURL, price } = productData.data;
    addProductToCart(
      {
        id,
        imageURL,
        price,
        quantity: selectedProductQuantity,
        totalQuantity: productData.data.quantity,
      },
      currentUser && currentUser.uid
    ).then((message) => {
      console.log(message);
    });
  }
  function handleQuantityChange(event) {
    const { value } = event.target;

    setProductQuantity(parseFloat(value));
  }

  return (
    <section id="product-page-section">
      {productData.loaded ? (
        <>
          <div className="product-image-container">
            <img src={productData.data.imageURL} alt="product" />
          </div>
          <div className="product-info-container">
            <h2 className="product-title-h2">{productData.data.name}</h2>
            <h4 className="product-description-h4">
              {productData.data.description}
            </h4>
            <span className="product-price">₺{productData.data.price}</span>
            <span className="product-quantity">
              Stok:{productData.data.quantity} KG
            </span>
            <form className="product-input-block" onSubmit={handleCartAdd}>
              <label htmlFor="product-quantity">Ürün miktarı (KG)</label>
              <CustomInput
                id="product-quantity"
                inputPlaceholder="Ürün miktarı KG"
                inputSize="product-page"
                inputType="number"
                min="1"
                max={productData.data.quantity}
                inputChange={handleQuantityChange}
              />
              <CustomButton
                buttonText="Sepete Ekle"
                buttonSize="product-page"
                buttonType="submit"
                buttonState={!currentUser}
              />
            </form>
          </div>
        </>
      ) : (
        <Loading size="page" />
      )}
    </section>
  );
}
