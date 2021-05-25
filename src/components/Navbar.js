import "./Navbar.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Navbar(props) {
  const location = useLocation();
  const [focus, setFocus] = useState(location.pathname);
  const [focusAbout, setFocusAbout] = useState(true);
  const [focusProjects, setFocusProjects] = useState(true);
  const [focusGithub, setFocusGithub] = useState(true);
  const aboutStyle = useSpring({
    x: focusAbout ? 1 : 0,
    config: { duration: 1000 },
  });

  const projectStyle = useSpring({
    x: focusProjects ? 1 : 0,
    config: { duration: 1000 },
  });

  const githubStyle = useSpring({
    x: focusGithub ? 1 : 0,
    config: { duration: 1000 },
  });

  //   const underlineStyle = useSpring({
  //     from: { backgroundColor: "blue" },
  //     marginBottom: focus === "about" ? "40vh" : 0,
  //   });

  function handleClick(event) {
    const id = event.target.getAttribute("id");
    console.log(id);
    setFocus(`/${id}`);
    const currentLocation = location.pathname;
    console.log(currentLocation);
    switch (id) {
      case "about":
        if (currentLocation === "/projects") {
          props.handleReverse(true);
        }
        if (currentLocation === "/contact") {
          props.handleReverse(true);
        }
        setFocusAbout((prevState) => !prevState);
        break;
      case "projects":
        if (currentLocation === "/") {
          props.handleReverse(false);
        }
        if (currentLocation === "/contact") {
          props.handleReverse(true);
        }
        setFocusProjects((prevState) => !prevState);
        break;
      case "github":
        if (currentLocation === "/" || currentLocation === "/projects") {
          props.handleReverse(false);
        }
        setFocusGithub((prevState) => !prevState);
        break;
      default:
        break;
    }
  }

  function renderStyle(activeTab) {
    const style = {
      transform: activeTab.x
        .to({
          range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
        })
        .to((x) => `scale(${x}) Rotate(270deg)`),
    };

    return style;
  }

  function renderUnderlineStyle() {
    let underlineStyle;
    switch (focus) {
      case "/":
        underlineStyle = { marginBottom: "64vh" };
        return underlineStyle;
      case "/about":
        underlineStyle = { marginBottom: "64vh" };
        return underlineStyle;
      case "/projects":
        underlineStyle = {};
        return underlineStyle;
      case "/contact":
        underlineStyle = { marginTop: "64vh" };
        return underlineStyle;
      default:
        break;
    }
  }

  return (
    <div id="Navbar" onClick={handleClick}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          backgroundColor: "inherit",
          width: "15vh",
          height: "34px",
        }}
      >
        <animated.div
          className={
            focus === "/about" || focus === "/"
              ? "sub-Navbar activeNavbar"
              : "sub-Navbar"
          }
          id="about"
          style={renderStyle(aboutStyle)}
        >
          ABOUT
        </animated.div>
      </Link>
      <Link
        to="/projects"
        style={{
          textDecoration: "none",
          color: "inherit",
          backgroundColor: "inherit",
          width: "15vh",
          height: "34px",
        }}
      >
        <animated.div
          className={
            focus === "/projects" ? "sub-Navbar activeNavbar" : "sub-Navbar"
          }
          id="projects"
          style={renderStyle(projectStyle)}
        >
          PROJECTS
        </animated.div>
      </Link>
      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          color: "inherit",
          backgroundColor: "inherit",
          width: "15vh",
          height: "34px",
        }}
      >
        <animated.div
          className={
            focus === "/contact" ? "sub-Navbar activeNavbar" : "sub-Navbar"
          }
          id="contact"
          style={renderStyle(githubStyle)}
        >
          CONTACT
        </animated.div>
      </Link>

      <div className="underline" style={renderUnderlineStyle()} />
    </div>
  );
}

export default Navbar;
