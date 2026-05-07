import React from "react";
import Card from "./Card";
import linkInfo from "../linkInfo";

function createLinkCard(link) {
  return (
    <Card
      key={link.id}
      title={link.title}
      linkUrl={link.linkUrl}
      imgSrc={link.imgSrc}
      altText={link.altText}
    />
  );
}

function LinkCards() {
  return(
    <>
      <h2 className="honk-h2">Recent Projects</h2>
      <div className="link-cards">{linkInfo.map(createLinkCard)}</div>
    </>
  )
}

export default LinkCards;