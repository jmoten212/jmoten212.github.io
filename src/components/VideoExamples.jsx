import React from "react";

function VideoExamples() {
  return(
    <>
      <h2 className="honk-h2">Prior Work Projects</h2>
      <div className="videos">
        <div className="video-div1">
          <h3 className="video-title">Example of a Course Build</h3>
          <video src="/videos/sample.mp4" autoPlay loop muted playsInline />
        </div>
        <div className="video-div2">
          <h3 className="video-title">Example of an E2E Test Run</h3>
          <video src="/videos/sample.mp4" autoPlay loop muted playsInline />
        </div>
      </div>
    </>
  )
}

export default VideoExamples;