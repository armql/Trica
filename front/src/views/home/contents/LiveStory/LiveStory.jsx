import React, { Fragment } from "react";
import StoryCard from "../StoryCard/StoryCard";

export default function LiveStory() {
  return (
    <Fragment>
      <StoryCard img="https://territorystudio.com/wp-content/uploads/2022/04/RTFKT-x-NIKE-CRYPTOKICKS-02.gif">
        <div className="bg-red-500 w-fit px-3 rounded-sm text-white hover:backdrop-blur-sm text-sm font-medium hover:bg-opacity-90 hover:cursor-pointer">
          Live
        </div>
        <div className="text-white font-semibold text-2xl">
          Introducing Nike Cryptokicks NFT, the first Nike x RTFKT venture into
          Digital Fashion.
        </div>
        <div className="flex items-center flex-row gap-3">
          <div className="flex flex-row items-center justify-center gap-1">
            <div className="w-5 h-5 overflow-hidden rounded-full bg-sky-400">
              <div className="w-4 h-3 bg-teal-100"></div>
              <div className="w-4 h-5 bg-white"></div>
            </div>
            <div className="text-white font-semibold text-xs">RFKT</div>
          </div>
          <div className="text-xs text-zinc-300 font-light">1k views</div>
          <div className="text-xs text-zinc-800 bg-white px-1.5 rounded-sm bg-opacity-40 backdrop-blur-sm font-light">
            Started 1 hour ago
          </div>
        </div>
      </StoryCard>
    </Fragment>
  );
}
