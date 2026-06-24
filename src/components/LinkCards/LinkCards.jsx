import React, { useState } from "react";
import Card from "./Card";
import linkInfo from "./linkInfo";
import QualityEngModal from "../Modals/QualityEngModal";
import CourseMaintModal from "../Modals/CourseMaintModal";
import CourseBuildModal from "../Modals/CourseBuildModal";
import "./link-cards.css";

function LinkCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (link) => {
    setSelectedCard(link);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  const renderModal = () => {
    if (!selectedCard) return null;

    switch (selectedCard.id) {
      case 1:
        return <QualityEngModal open={open} onClose={handleClose} />;
      case 2:
        return <CourseMaintModal open={open} onClose={handleClose} />;
      case 3:
        return <CourseBuildModal open={open} onClose={handleClose} />;
      default:
        return null;
    }
  };

  return (
    <>
      <section>
        <img className="everfi-logo" src="/images/everfi_logo.jpg" alt="Everfi logo" />
        <div className="link-cards-div">
          {linkInfo.map((link) => (
            <Card
              key={link.id}
              title={link.title}
              videoSrc={link.videoSrc}
              onClick={() => handleOpen(link)}
            />
          ))}
        </div>
        {renderModal()}
        <p className="footer-disclaimer">© All content, trademarks, logos, and intellectual property displayed in the examples above are the exclusive property of Everfi or their respective owners.</p>
      </section>
    </>
  );
}

export default LinkCards;