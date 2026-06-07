import React from "react";
import QualityEngModal from "../Modals/QualityEngModal";
import CourseMaintModal from "../Modals/CourseMaintModal";
import CourseBuildModal from "../Modals/CourseBuildModal";

function Card(props) {
  return (
    <a href={props.linkUrl}>
      <div className="link-card">
        <video src={props.videoSrc} loading="lazy" autoPlay loop muted playsInline ></video>
        <h3 className="link-card-title">{props.title}</h3>
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
      </div>
    </a>
  );
}

export default Card;
