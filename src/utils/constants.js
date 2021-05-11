import { auth } from "../firebase/firebase";

const signedMenuItems = [
  {
    id: "cartButton",
    text: "Sepetim",
    icon: "cart",
    path: "sepetim",
  },
  {
    id: "orderButton",
    text: "Siparişlerim",
    icon: "orders",
    path: "siparislerim",
  },
  {
    id: "addressButton",
    text: "Adreslerim",
    icon: "address",
    path: "adreslerim",
  },
  {
    id: "logoutButton",
    text: "Çıkış Yap",
    icon: "logout",
    path: "",
    funcOnPress: () => {
      auth.signOut();
    },
  },
];

const adminMenuFilters = {
  productsAdmin: {
    name: "Ürün",
    id: "items",
    data: [
      { name: "Ürün Adı A-Z", value: "items-name-asc" },
      { name: "Ürün Adı Z-A", value: "items-name-desc" },
      { name: "Fiyat Düşük-Yüksek", value: "items-price-asc" },
      { name: "Fiyat Yüksek-Düşük", value: "items-price-desc" },
    ],
  },
  categoriesAdmin: {
    name: "Kategori",
    id: "categories",
    data: [
      { name: "Kategori Adı A-Z", value: "categories-name-asc" },
      { name: "Kategori Adı Z-A", value: "categories-name-desc" },
    ],
  },
  productsMain: {
    name: "Ürünler",
    id: "products",
    data: [
      { name: "Ürün Adı A-Z", value: "product-name-asc" },
      { name: "Ürün Adı Z-A", value: "product-name-desc" },
      { name: "Fiyat Düşük-Yüksek", value: "product-price-asc" },
      { name: "Fiyat Yüksek-Düşük", value: "product-price-desc" },
    ],
  },
};

const sortFunctions = {
  name: {
    asc: (a, b) => a.name > b.name,
    desc: (a, b) => b.name > a.name,
  },
  price: {
    asc: (a, b) => a.price - b.price,
    desc: (a, b) => b.price - a.price,
  },
};

export { signedMenuItems, adminMenuFilters, sortFunctions };
