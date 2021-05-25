import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import AboutPage from "../pages/AboutPage.js";
import ProjectsPage from "../pages/ProjectsPage.js";
import ContactPage from "../pages/ContactPage.js";

function SwitchRoutes(props) {
  let location = useLocation();
  const transitions = useTransition(location, {
    initial: {
      position: "absolute",
      y: "0vh",
    },
    from: {
      position: "absolute",
      y: props.reverse ? "-130vh" : "130vh",
    },
    enter: {
      //   position: "absolute",
      y: "0vh",
    },
    leave: {
      //   position: "absolute",
      y: props.reverse ? "130vh" : "-130vh",
    },
    config: { duration: 1000 },
  });

  return transitions((props, item) => {
    // console.log(item);
    return (
      <animated.div style={props}>
        <Switch location={item}>
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route path="/" component={AboutPage} />
        </Switch>
      </animated.div>
    );
  });
}

export default SwitchRoutes;
