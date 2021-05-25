import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: "100%",
    maxHeight: "100%",
    flexGrow: 1,
    position: "relative",
  },
  img: {
    // height: "100%",
    maxHeight: "30vw",
    display: "block",
    // maxWidth: 400,
    overflow: "hidden",
    width: "100%",
    // margin: "8px"
    zIndex: 9,
  },
  onHover: {
    position: "absolute",
    display: "block",
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(20vh + 15vw)",
    padding: "16px",
    fontWeight: 500,
    backgroundColor: "rgba(136, 136, 136, 0.65)",
    color: "white",
    textShadow: "0 0 2px black",
    textAlign: "center",
    fontSize: "calc(0.5vw + 1vh)",
    zIndex: 10,
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    // position: "relative",
    flexGrow: 1,
    flexWrap: "wrap",
    // top: "20px",
  },
}));

function ProjectCard({ details }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [hover, setHover] = useState(false);

  const maxSteps = details.img.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  function handleMouseEnter() {
    console.log("mouse enter");
    setHover(true);
  }

  function handleMouseLeave() {
    console.log("mouse leave");
    setHover(false);
  }

  // function handleClickHover() {
  //   if (!hover) {
  //     return setHover(true);
  //   }
  //   setHover(false);
  // }

  return (
    <div>
      <div
        className={classes.root}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {details.img.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                height: "calc(20vh + 15vw)",
                border: "1px solid rgba(161, 161, 161, 0.5)",
              }}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step} alt="projects-images" />
              ) : null}
            </div>
          ))}
        </SwipeableViews>

        <div
          className={classes.onHover}
          style={hover ? { display: "block" } : { display: "none" }}
        >
          <h6
            style={{
              textDecoration: "underline",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            {details.title.toUpperCase()}
          </h6>
          <p>{details.description}</p>
          <div
            style={{
              textAlign: "left",
              padding: "4px",
            }}
          >{`Front End:  ${details.frontEnd}`}</div>
          <div
            style={{
              textAlign: "left",
              borderBottom: "2px solid white",
              padding: "4px",
              marginBottom: "8px",
            }}
          >{`Back End:  ${details.backEnd}`}</div>
          <div className={classes.linkContainer}>
            <span>
              Website:{" "}
              <a href={details.url} target="_blank" rel="noreferrer">
                {details.title}
              </a>
            </span>
            <span>
              Code:{" "}
              <a href={details.github} target="_blank" rel="noreferrer">
                Github
              </a>
            </span>
          </div>
        </div>
      </div>
      <MobileStepper
        style={{ padding: 0 }}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            style={{ fontSize: "0.6rem" }}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            style={{ fontSize: "0.6rem" }}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default ProjectCard;
