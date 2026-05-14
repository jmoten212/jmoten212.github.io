import React from "react";

function Card(props) {
  return (
    <a href={props.linkUrl}>
      <div className="link-div">
        <img src={props.imgSrc} alt={props.altText} />
        <h3 className="sans-h2">{props.title}</h3>
      </div>
    </a>
  );
}

export default Card;
