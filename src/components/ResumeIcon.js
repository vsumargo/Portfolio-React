import ResumeSVG from "../images/svg-icons/resume.svg";
import Resume from "../data/Vincent_Sumargo_Resume WD 202105.pdf";
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

function ResumeIcon() {
  return (
    <LightTooltip title="Resume">
      <div className="linkIconContainer">
        <a href={Resume} download>
          <img className="linkIcon" src={ResumeSVG} alt="linkedin-icon" />
        </a>
      </div>
    </LightTooltip>
  );
}

export default ResumeIcon;
