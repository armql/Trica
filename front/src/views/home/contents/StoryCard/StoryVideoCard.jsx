import React from "react";
export default function StoryVideoCard({ children, vid }) {
  return (
    <div className="w-full relative flex flex-col justify-end items-start h-96 bg-red-400 rounded-lg group overflow-hidden">
      <iframe
        width="1710"
        height="737"
        src={vid}
        title="Top 10 NIKE Sneakers for 2023"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="flex flex-col gap-1 z-10 p-6">{children}</div>
    </div>
  );
}
