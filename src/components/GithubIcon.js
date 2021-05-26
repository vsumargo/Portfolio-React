import GithubSVG from "../images/svg-icons/github.svg";
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

function GithubIcon() {
  return (
    <LightTooltip title="Github">
      <div className="linkIconContainer">
        <a href="https://github.com/vsumargo" target="_blank" rel="noreferrer">
          <img className="linkIcon" src={GithubSVG} alt="linkedin-icon" />
        </a>
      </div>
    </LightTooltip>
  );
}

export default GithubIcon;
