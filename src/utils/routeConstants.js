const routeInfo = {
  yonetim: {
    pathname: "yonetim",
    title: "Yönetim",
    icon: "admin",
    sideMenu: false,
  },
  urunler: {
    pathname: "yonetim/urunler",
    title: "Ürünler",
    icon: "product",
    sideMenu: true,
  },
  urunekle: {
    pathname: "yonetim/urunekle",
    title: "Ürün Ekle / Düzenle",
    icon: "product",
    sideMenu: false,
  },
  kategoriler: {
    pathname: "yonetim/kategoriler",
    title: "Kategoriler",
    icon: "category",
    sideMenu: true,
  },
  kategoriekle: {
    pathname: "yonetim/kategoriekle",
    title: "Kategori Ekle / Düzenle",
    icon: "category",
    sideMenu: false,
  },
};

export { routeInfo };
