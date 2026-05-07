import React from "react";
import GithubTooltip from "./components/GithubTooltip";
import Header from "./components/Header";
import LinkCards from "./components/LinkCards"
import VideoExamples from "./components/VideoExamples";

function App() {
  return (
    <>
      <Header tooltipId="gh-profile-link" tooltipPlace="right-end" />
      <GithubTooltip tooltipId="gh-profile-link" />
      <LinkCards />
      <VideoExamples />
      <p>© All content, trademarks, logos, and intellectual property displayed in these videos is the exclusive property of Everfi or their respective owners. These videos are merely being used as examples to display my previous work at the company.</p>
    </>
  );
}

export default App;
