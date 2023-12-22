import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function RecommendedProduct() {
  const freshData = [
    {
      brand: "adidas",
      title: "Adidas Yeezy Boost 700 MNVN Bone",
      price: 110,
      image:
        "https://www.uniquekicks.be/cdn/shop/files/1_1_1f5882ce-4400-4914-960b-bcd183e0a038.png?v=1683456596",
    },
    {
      brand: "jordans",
      title: "Jordan 11 Retro Low White Concord (W)",
      price: 194,
      image:
        "https://restocks.net/_next/image/?url=https%3A%2F%2Fcdn.restocks.net%2Fcdn-cgi%2Fimage%2Fwidth%3D1000%2Fstorage%2Fimages%2Fproducts%2FAH7860-100%2F1.png&w=3840&q=75",
    },
    {
      brand: "nike",
      title: "Nike Huarache Run Light Bone & Black",
      price: 110,
      image:
        "https://storage.googleapis.com/ssr_nz/products/f11990429230f841f814aefc2d4fbb08.jpg",
    },
    {
      brand: "nike",
      title: "Nike ISPA Overreact Sail Multi",
      price: 233,
      image:
        "https://images.nike.com/is/image/DotCom/CZ9079_100?$NIKE_PWP_GRAY$&wid=420&hei=420",
    },
    {
      brand: "vans",
      title: "Vans Old Skool Pro",
      price: 65,
      image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
    },
  ];

  return (
    <div className="px-4 flex flex-col gap-4">
      <div className="font-semibold text-zinc-800 text-xl">
        Recommended for you
      </div>
      <div className="flex flex-row gap-4 overflow-y-auto z-10 pb-2">
        {freshData.map((product) => (
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
