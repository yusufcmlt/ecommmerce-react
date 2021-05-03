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

const categories = [
  {
    name: "Kadın",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/category-images%2Fcategory-kadin.webp?alt=media&token=59d57871-ddd9-4b04-b369-a7977f94b52b",
  },
  {
    name: "Erkek",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/category-images%2Fcategory-erkek.jpg?alt=media&token=a8b91025-b66a-4460-b3c8-86e219e8dc79",
  },
  {
    name: "Bot",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/category-images%2Fcategory-bot.webp?alt=media&token=5b8e3ae9-4055-410a-9526-67edda8907de",
  },
  {
    name: "Sneaker",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/category-images%2Fcategory-sneaker.webp?alt=media&token=87010a0a-f5bc-463a-b75d-9a964d55f59f",
  },
  {
    name: "Terlik",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/category-images%2Fcategory-terlik.webp?alt=media&token=9b697097-0129-40be-a1f8-f28dd4f1901c",
  },
  {
    name: "Spor",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/category-images%2Fcategory-spor.webp?alt=media&token=a9289b6a-3c92-44dc-af24-d1b032756d7f",
  },
  {
    name: "Outdoor",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/category-images%2Fcategory-outdoor.webp?alt=media&token=a0d0de24-b17b-4c31-a491-d74a72b55970",
  },
  {
    name: "Günlük",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/category-images%2Fcategory-gunluk.webp?alt=media&token=56f38cf5-40c8-4322-bcbb-a80d70564a06",
  },
];

export { signedMenuItems, categories };
