import React from "react";
import Card from "./Card";
import linkInfo from "./linkInfo";
import "./link-cards.css"

function createLinkCard(link) {
  return (
    <Card
      key={link.id}
      title={link.title}
      videoSrc={link.videoSrc}
    />
  );
}

function LinkCards() {
  return(
    <>
      <section>
        <img className="everfi-logo" src="/images/everfi_logo.jpg" alt="Everfi logo" />
        <div className="link-cards-div">{linkInfo.map(createLinkCard)}</div>
        {/* <p>© All content, trademarks, logos, and intellectual property displayed in the examples under previous Experience is the exclusive property of Everfi or their respective owners.</p> */}
      </section>
    </>
  )
}

export default LinkCards;