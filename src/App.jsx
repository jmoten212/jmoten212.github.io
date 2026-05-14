import React from "react";
import GithubTooltip from "./components/GithubTooltip";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LinkCards from "./components/Link Cards/LinkCards"
import VideoExamples from "./components/VideoExamples";
import QualityEngModal from "./components/Modals/QualityEngModal";
import CourseMaintModal from "./components/Modals/CourseMaintModal";
import CourseBuildModal from "./components/Modals/CourseBuildModal";

function App() {

  return (
    <>
      <Header tooltipId="gh-profile-link" tooltipPlace="right-end" />
      <GithubTooltip tooltipId="gh-profile-link" />
      <LinkCards />
      <VideoExamples />
      <ul>
        <li>
          <QualityEngModal />
        </li>
        <li>
          <CourseMaintModal />
        </li>
        <li>
          <CourseBuildModal />
        </li>
      </ul>
      <Footer />
    </>
  );
}

export default App;
