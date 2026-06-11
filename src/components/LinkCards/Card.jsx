import React from "react";

function Card({ title, videoSrc, onClick }) {
  return (
    <button type="button" className="link-card" onClick={onClick}>
      <video src={videoSrc} loading="lazy" autoPlay loop muted playsInline />
      <h3 className="link-card-title">{title}</h3>
    </button>
  );
}

export default Card;
