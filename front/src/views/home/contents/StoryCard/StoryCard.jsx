import React from "react";
export default function StoryCard({ children, img }) {
  return (
    <div className="w-full relative flex flex-col justify-end items-start h-[80vh] bg-red-400 rounded-lg group overflow-hidden">
      <img
        src={img}
        alt=""
        className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full rounded-lg group-hover:scale-105 transition duration-500"
      />
      <div className="flex flex-col gap-1 z-10 p-6">{children}</div>
    </div>
  );
}
