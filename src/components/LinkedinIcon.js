import LinkedinSVG from "../images/svg-icons/linkedin.svg";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#fafafa",
    color: "rgba(0, 0, 0, 0.87)",
    margin: "2px",
    fontSize: "0.7rem",
  },
}))(Tooltip);

function LinkedinIcon() {
  return (
    <LightTooltip title="LinkedIn">
      <div className="linkIconContainer">
        <a
          href="https://www.linkedin.com/in/vincentsumargo/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkIcon" src={LinkedinSVG} alt="linkedin-icon" />
        </a>
      </div>
    </LightTooltip>
  );
}

export default LinkedinIcon;
