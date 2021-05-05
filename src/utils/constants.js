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

const itemsPlaceholder = [
  {
    name: "Air Force 1 High 07",
    price: 450,
    id: "air-force-1-high-07-123123",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx3%2C.jpg?alt=media&token=c884c0ec-9a13-4cae-8959-dc6195d33d49",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx.jpg?alt=media&token=9dd6e197-57e0-46b4-a241-527b5394e1a0",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx2%2C.jpg?alt=media&token=c68c8996-f2ed-4fb0-8bf7-a38c8879e208",
    ],
    size: {
      41: 2,
      44: 3,
    },
    category: ["erkek", "gunluk"],
    brand: "nike",
    gender: "erkek",
    description: "Erkek Yarış Ayakkabısı",
  },
  {
    name: "Air Force 1 High 07",
    price: 999,
    id: "air-force-1-high-07-123123",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/51fd42e3-bda4-4f1d-affe-01fd6732b4bf/air-zoom-pegasus-38-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-Rl7WJR.png",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx.jpg?alt=media&token=9dd6e197-57e0-46b4-a241-527b5394e1a0",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx2%2C.jpg?alt=media&token=c68c8996-f2ed-4fb0-8bf7-a38c8879e208",
    ],
    size: {
      41: 2,
      44: 3,
    },
    category: ["erkek", "gunluk"],
    brand: "nike",
    gender: "erkek",
    description: "Erkek Yarış Ayakkabısı",
  },
  {
    name: "Air Force 1 High 07",
    price: 350,
    id: "air-force-1-high-07-123123",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0beaadaaba0344da8c60ac7c0137d145_9366/NMD_R1_Spectoo_Ayakkabi_Siyah_FZ3204_01_standard.jpg",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx.jpg?alt=media&token=9dd6e197-57e0-46b4-a241-527b5394e1a0",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx2%2C.jpg?alt=media&token=c68c8996-f2ed-4fb0-8bf7-a38c8879e208",
    ],
    size: {
      41: 2,
      44: 3,
    },
    category: ["erkek", "gunluk"],
    brand: "nike",
    gender: "erkek",
    description: "Erkek Yarış Ayakkabısı",
  },
  {
    name: "Air Force 1 High 07",
    price: 950,
    id: "air-force-1-high-07-123123",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/194347/01/fnd/TUR/w/1000/h/1000/bg/255,255,255",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx.jpg?alt=media&token=9dd6e197-57e0-46b4-a241-527b5394e1a0",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx2%2C.jpg?alt=media&token=c68c8996-f2ed-4fb0-8bf7-a38c8879e208",
    ],
    size: {
      41: 2,
      44: 3,
    },
    category: ["erkek", "gunluk"],
    brand: "nike",
    gender: "erkek",
    description: "Erkek Yarış Ayakkabısı",
  },
  {
    name: "Air Force 1 High 07",
    price: 650,
    id: "air-force-1-high-07-123123",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx3%2C.jpg?alt=media&token=c884c0ec-9a13-4cae-8959-dc6195d33d49",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx.jpg?alt=media&token=9dd6e197-57e0-46b4-a241-527b5394e1a0",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx2%2C.jpg?alt=media&token=c68c8996-f2ed-4fb0-8bf7-a38c8879e208",
    ],
    size: {
      41: 2,
      44: 3,
    },
    category: ["erkek", "gunluk"],
    brand: "nike",
    gender: "erkek",
    description: "Erkek Yarış Ayakkabısı",
  },
  {
    name: "Nike Air Zoom Pegasus 38",
    price: 1079,
    id: "air-force-1-high-07-123123",
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5eeca920-92e1-483b-9407-328af7f2b497/air-zoom-pegasus-38-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-Gl6D1F.png",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx.jpg?alt=media&token=9dd6e197-57e0-46b4-a241-527b5394e1a0",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx2%2C.jpg?alt=media&token=c68c8996-f2ed-4fb0-8bf7-a38c8879e208",
    ],
    size: {
      41: 2,
      44: 3,
    },
    category: ["erkek", "gunluk"],
    brand: "nike",
    gender: "erkek",
    description: "Erkek Yarış Ayakkabısı",
  },
  {
    name: "Runfalcon Ayakkabı",
    price: 449,
    id: "air-force-1-high-07-123123",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f77bea97de7548068afca9ae0164d5d6_9366/Runfalcon_Ayakkabi_Siyah_G28970_01_standard.jpg",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx.jpg?alt=media&token=9dd6e197-57e0-46b4-a241-527b5394e1a0",
      "https://firebasestorage.googleapis.com/v0/b/react-ecommerce-isyeri.appspot.com/o/item-images%2Fair-force-1-high-07-ayakkab%C4%B1s%C4%B1-tg72Lx2%2C.jpg?alt=media&token=c68c8996-f2ed-4fb0-8bf7-a38c8879e208",
    ],
    size: {
      41: 2,
      44: 3,
    },
    category: ["erkek", "gunluk"],
    brand: "nike",
    gender: "erkek",
    description: "Core Black",
  },
];

export { signedMenuItems, categories, itemsPlaceholder };
