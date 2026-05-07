import React from "react";
import { Tooltip } from "react-tooltip";

function GithubTooltip(props) { // id="gh-profile-link"
  return (
    <Tooltip id={props.tooltipId}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src="/images/github_profile.png" 
          alt="Preview image to the homepage of the GitHub profile of jmoten212" 
          className="tooltip-img"
          style={{ borderRadius: '10px' }} 
        />
        <span className="tooltip-text">Link to GitHub Profile</span>
      </div>
    </Tooltip>
  )
}

export default GithubTooltip;