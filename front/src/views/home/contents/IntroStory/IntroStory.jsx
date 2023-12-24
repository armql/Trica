import React, { Fragment } from "react";
import StoryCard from "../StoryCard/StoryCard";
import bg from "../../../../assets/images/auth-bg.png";

export default function IntroStory() {
  return (
    <Fragment>
      <StoryCard img={bg}>
        <div className="text-white font-semibold text-2xl">
          Welcome Trica Store
        </div>
        <div className="font-normal text-sm text-white">Trica Store</div>
      </StoryCard>
    </Fragment>
  );
}
