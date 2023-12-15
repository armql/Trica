import React from "react";

export default function Social({ essentials }) {
  return (
    <div className="flex flex-row gap-2 items-center bg-gray-200 justify-around my-4 py-2 rounded-2xl">
      <div className="rounded-full active:cursor-wait transition shadow-sm hover:scale-105 active:scale-110">
        {essentials.google}
      </div>
      <div className="rounded-full active:cursor-wait transition shadow-sm active:scale-110 hover:scale-105">
        {essentials.facebook}
      </div>
      <div className="rounded-full active:cursor-wait transition shadow-sm active:scale-110 hover:scale-105">
        {essentials.ios}
      </div>
    </div>
  );
}
