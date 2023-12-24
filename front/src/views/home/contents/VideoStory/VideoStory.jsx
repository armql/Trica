import React, { Fragment } from "react";
import StoryCard from "../StoryCard/StoryCard";
import videogif from "./gifes.gif";
export default function VideoStory() {
  return (
    <Fragment>
      <StoryCard img={videogif}>
        <div className="bg-white w-fit p-3 rounded-full hover:backdrop-blur-sm hover:bg-opacity-90 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
          </svg>
        </div>
        <div className="text-white font-semibold text-2xl">
          Nike Adapt BB Unboxing - Futuristic Self Lacing Sneakers
        </div>
        <div className="flex items-center flex-row gap-3">
          <div className="flex flex-row items-center justify-center gap-1">
            <div className="w-5 h-5 rounded-full bg-amber-400"></div>
            <div className="text-white font-semibold text-xs">
              Unbox Therapy
            </div>
          </div>
          <div className="text-xs text-zinc-300 font-light">1k views</div>
          <div className="text-xs text-zinc-800 bg-white px-1.5 rounded-sm bg-opacity-40 backdrop-blur-sm font-light">
            3 minutes ago
          </div>
        </div>
      </StoryCard>
    </Fragment>
  );
}
