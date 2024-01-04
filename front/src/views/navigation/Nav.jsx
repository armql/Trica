import React from "react";
import Bar from "./bar/Bar";

export default function Nav() {
  return (
    <nav className="fixed z-40 bottom-3 left-0 right-0">
      <div className="bg-white bg-opacity-90 backdrop-blur-md flex justify-evenly items-center w-72 mx-auto h-14 py-6 rounded-full shadow-xl">
        <Bar />
      </div>
    </nav>
  );
}
