import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import SwitchRoutes from "./components/SwitchRoutes.js";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

function App() {
  const [reverse, setReverse] = useState(false);

  function handleReverse(bool) {
    setReverse(bool);
  }
  return (
    <>
      <CssBaseline />
      <Router basename="/Portfolio-React">
        <Grid container>
          <Grid item xs={2} md={1}>
            <Navbar handleReverse={handleReverse} />
          </Grid>
          <Grid
            item
            xs={10}
            md={11}
            className="mainContent"
            style={{ position: "relative" }}
          >
            <SwitchRoutes reverse={reverse} />
            {/* <Switch>
              <Route exact path="/projects">
                <ProjectsPage />
              </Route>
              <Route path="/">
                <AboutPage />
              </Route>
            </Switch> */}
          </Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
