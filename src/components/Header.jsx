import React from "react";

function Header(props) {
  return (
    <div className="title-link">
        <a href="https://github.com/jmoten212" data-tooltip-id={props.tooltipId} data-tooltip-place={props.tooltipPlace}> 
        <h1 className="honk-h1">jmoten212.github.io</h1>
        </a>
    </div>
  ) 
}

export default Header;