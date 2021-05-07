import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { getAdminItems } from "../../../firebase/firebase";
import AdminProduct from "./AdminProduct";

export default function AdminProductList() {
  const [isLoading, setLoading] = useState(true);
  const [adminItems, setAdminItems] = useState([]);

  useEffect(() => {
    getAdminItems().then((itemData) => {
      setAdminItems(itemData);
      setLoading(false);
    });
  }, []);
  return (
    <div className="admin-product-list-container">
      {!isLoading
        ? adminItems.map((item) => (
            <AdminProduct
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              number={item.number}
            />
          ))
        : null}
    </div>
  );
}
