import React from "react";
import IntroStory from "../contents/IntroStory/IntroStory";
import VideoStory from "../contents/VideoStory/VideoStory";
import LiveStory from "../contents/LiveStory/LiveStory";
import BlogStory from "../contents/BlogStory/BlogStory";

export default function Story() {
  return (
    <div className="px-2 flex flex-col gap-12">
      <IntroStory />
      <VideoStory />
      <LiveStory />
      <BlogStory />
    </div>
  );
}
