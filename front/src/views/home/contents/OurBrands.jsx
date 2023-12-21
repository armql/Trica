import React from "react";
import essentials from "../../../assets/svg/essentials/essentials";

export default function OurBrands() {
  return (
    <div className="px-4 flex flex-col gap-4">
      <div className="font-semibold text-zinc-800 text-xl">Our Brands</div>
      <div className="flex flex-row gap-4 overflow-x-auto bg-white items-center">
        <div className="rounded-full bg-zinc-50 active:bg-zinc-200 flex justify-center items-center hover:bg-zinc-100 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
          <div className="w-32 h-32 object-cover flex justify-center items-center">
            {essentials.nike}
          </div>
        </div>
        <div className="rounded-full bg-zinc-50 active:bg-zinc-200 flex justify-center items-center hover:bg-zinc-100 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
          <div className="w-32 h-32 object-cover flex justify-center items-center">
            {essentials.adidas}
          </div>
        </div>
        <div className="rounded-full bg-zinc-50 active:bg-zinc-200 flex justify-center items-center hover:bg-zinc-100 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
          <div className="w-32 h-32 object-cover flex justify-center items-center">
            {essentials.jordans}
          </div>
        </div>
        <div className="rounded-full bg-zinc-50 active:bg-zinc-200 flex justify-center items-center hover:bg-zinc-100 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
          <div className="w-32 h-32 object-cover flex justify-center items-center">
            {essentials.vans}
          </div>
        </div>
      </div>
    </div>
  );
}
