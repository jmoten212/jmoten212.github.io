import React from "react";

function Card(props) {
  return (
    <a href={props.linkUrl}>
      <div className="link-card">
        <video src={props.videoSrc} loading="lazy" autoPlay loop muted playsInline ></video>
        <h3 className="link-card-title">{props.title}</h3>
      </div>
    </a>
  );
}

export default Card;
