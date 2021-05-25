import "./SvgIcon.css";
import React, { useState } from "react";

function SvgIcon(props) {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  const style = hover ? { display: "flex" } : { display: "none" };
  return (
    <div
      className="svgContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="svgIcon" src={props.iconImage} alt="svg-icon" />
      <div className="iconName" style={style}>
        {props.name}
      </div>
    </div>
  );
}

export default SvgIcon;
