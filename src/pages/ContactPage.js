import "./ContactPage.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import LinkedinIcon from "../components/LinkedinIcon.js";
import GithubIcon from "../components/GithubIcon.js";

function ContactPage() {
  return (
    <Grid container style={{ padding: "5vw", maxWidth: "100%" }}>
      <Grid item xs={12}>
        <div className="page-title">Contact Me</div>
      </Grid>
      <Grid item xs={12}>
        <p>You can reach out to me from various platform as below</p>
      </Grid>
      <Grid item xs={2} style={{margin: "0 6px"}}>
        <LinkedinIcon />
      </Grid>
      <Grid item xs={2} style={{margin: "0 6px"}}>
        <GithubIcon />
      </Grid>
    </Grid>
  );
}

export default ContactPage;
