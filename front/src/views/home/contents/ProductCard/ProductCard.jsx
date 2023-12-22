import React from "react";
import essentials from "../../../../assets/svg/essentials/essentials";

export default function FreshProductCard({ brand, title, price, img }) {
  return (
    <div className="flex flex-col hover:bg-zinc-50 rounded-lg group gap-1 w-40 transition duration-300 cursor-pointer">
      <div className="relative w-40 h-40 bg-zinc-100 rounded-lg">
        <div className="absolute flex justify-center items-center object-cover top-0 left-0 right-0 bottom-0 overflow-hidden rounded-lg ">
          <img
            src={img}
            alt=""
            className="overflow-hidden object-cover rounded-lg group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="absolute top-3 left-4">{essentials[brand]}</div>
      </div>
      <div className="flex flex-col gap-1 px-2">
        <div className="font-light text-sm h-10">{title}</div>
        <div className="font-extralight text-zinc-400 text-xs">Lowest Ask</div>
        <div>${price}</div>
      </div>
    </div>
  );
}
