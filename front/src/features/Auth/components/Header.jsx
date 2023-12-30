import React, { Fragment } from "react";

export default function Header() {
  return (
    <Fragment>
      <div className="w-full h-full absolute  backdrop-blur-[1px] bg-opacity-10 bg-white left-0 top-0 right-0 bottom-0 z-10"></div>
      <div className="flex items-center flex-col absolute z-10">
        <div className="py-8 px-2 text-orange-400 font-light tracking-tighter text-2xl text-start">
          Buy & Sell Authentic
        </div>
      </div>
      <div className="flex mt-6 items-center flex-col absolute z-10">
        <div className="py-10 italic tracking-wide px-2 font-bold bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent text-5xl text-start">
          Trica Store
        </div>
      </div>
    </Fragment>
  );
}
