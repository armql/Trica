import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function PopularProduct() {
  const popularData = [
    {
      brand: "nike",
      title: "Nike Air Force 1 Low White",
      price: 90,
      image:
        "https://images.nike.com/is/image/DotCom/CW2288_111?$NIKE_PWP_GRAY$&wid=420&hei=420",
    },
    {
      brand: "jordans",
      title: "Jordan 4 Retro",
      price: 120,
      image:
        "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw37b1536a/nk/ae6/0/3/5/e/4/ae6035e4_977d_476a_bf95_35bcd86c9d54.png?sw=540&sh=540&sm=fit&q=80",
    },
    {
      brand: "jordans",
      title: "Jordan 1 High OG Bred",
      price: 170,
      image:
        "https://www.kicksonfire.com/wp-content/uploads/2018/01/Air-Jordan-1-High-OG-Bred-Toe.png",
    },
    {
      brand: "vans",
      title: "Vans Slip-On Checkerboard",
      price: 50,
      image: "https://images.vans.com/is/image/Vans/D3HNVY-HERO?$583x583$",
    },
    {
      brand: "nike",
      title: "Nike Huarache Run Light Bone & Black",
      price: 110,
      image:
        "https://storage.googleapis.com/ssr_nz/products/f11990429230f841f814aefc2d4fbb08.jpg",
    },
    {
      brand: "adidas",
      title: "Adidas Stan Smith White Green",
      price: 80,
      image:
        "https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw0c6a0c0f/zoom/M20324_01_standard.jpg?sw=2000&sh=2000&strip=false",
    },
    {
      brand: "vans",
      title: "Vans Sk8-Hi Black",
      price: 65,
      image: "https://images.vans.com/is/image/Vans/D5IB8C-HERO?$583x583$",
    },
    {
      brand: "nike",
      title: "Nike Air Max 90 White",
      price: 120,
      image:
        "https://images.nike.com/is/image/DotCom/CW7483_100?$NIKE_PWP_GRAY$&wid=420&hei=420",
    },
  ];

  return (
    <div className="px-4 flex flex-col gap-4">
      <div className="font-semibold text-zinc-800 text-xl">Most Popular</div>
      <div className="grid grid-flow-col grid-rows-2 flex-initial gap-4 overflow-y-auto z-10 pb-2">
        {popularData.map((product) => (
          <ProductCard
            img={product.image}
            key={product.title}
            brand={product.brand}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
