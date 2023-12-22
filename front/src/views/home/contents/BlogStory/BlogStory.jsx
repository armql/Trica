import React, { Fragment } from "react";
import StoryCard from "../StoryCard/StoryCard";
import art from "./art.jpg";

export default function BlogStory() {
  return (
    <Fragment>
      <StoryCard img={art}>
        <div className="text-transparent font-semibold text-3xl bg-gradient-to-l from-white to-amber-200 bg-clip-text">
          Feat. the Nike Air Penny 2 "Baroque Brown"
        </div>
        <div className="font-normal text-sm text-black bg-white w-fit px-4 py-0.5 rounded-full bg-opacity-80 backdrop-blur-sm">
          bubblekope
        </div>
      </StoryCard>
    </Fragment>
  );
}
