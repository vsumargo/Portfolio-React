import "./AboutPage.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import userPic from "../images/vsumargo-photo.png";
import SvgIcon from "../components/SvgIcon.js";
import IconBootstrap from "../images/svg-icons/bootstrap.svg";
import IconCSS3 from "../images/svg-icons/css3.svg";
import IconExpress from "../images/svg-icons/expressjs.svg";
import IconReact from "../images/svg-icons/react.svg";
import IconNodejs from "../images/svg-icons/nodejs.svg";
import IconMongodb from "../images/svg-icons/mongodb.svg";
import IconMySql from "../images/svg-icons/mysql.svg";
import IconHtml from "../images/svg-icons/html5.svg";
import IconJavascript from "../images/svg-icons/javascript.svg";
import IconJquery from "../images/svg-icons/jquery.svg";
import LinkedinIcon from "../components/LinkedinIcon.js";
import GithubIcon from "../components/GithubIcon.js";
import ResumeIcon from "../components/ResumeIcon.js";

function AboutPage() {
  function renderSvgIcons() {
    const icons = [
      { img: IconReact, name: "React.js" },
      { img: IconNodejs, name: "Node.js" },
      { img: IconExpress, name: "Express.js" },
      { img: IconMongodb, name: "MongoDB" },
      { img: IconMySql, name: "MySQL" },
      { img: IconJavascript, name: "Javascript" },
      { img: IconJquery, name: "jQuery" },
      { img: IconBootstrap, name: "Bootstrap" },
      { img: IconHtml, name: "HTML5" },
      { img: IconCSS3, name: "CSS3" },
    ];
    const mapArray = icons.map((icon, index) => {
      return <SvgIcon iconImage={icon.img} name={icon.name} key={index} />;
    });
    return mapArray;
  }
  return (
    <Grid container style={{ padding: "5vw", maxWidth: "100%" }} spacing={3}>
      <Grid item xs={12}>
        <div>Hello, I'm</div>
      </Grid>
      <Grid item xs={12}>
        <div className="page-title">VINCENT SUMARGO</div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <img src={userPic} alt="profile" width="100%" height="" />
      </Grid>
      <Grid item xs={10} sm={8}>
        <h6>
          Full-Stack Web Developer <span>/</span> Civil Engineer
        </h6>
        <div>
          <p>
            A passionate and aspiring full-stack web developer, well versed in
            Javascript based libraries and frameworks and great interest in
            learning other programming language.
          </p>
          <br />
          <p>
            With 10 years of Civil Engineering experience and 3 years of
            Business Management experience as a business owner, I have develop
            and polish my skills to think logically, to solve problem, to
            understanding design and build process, to manage businesses and
            combining with programming and coding skills, I believe that I can
            be a solution to your needs.
          </p>
        </div>
      </Grid>
      <Grid item xs={2} sm={1} style={{padding:"1%"}}>
        <LinkedinIcon />
        <GithubIcon />
        <ResumeIcon />
      </Grid>
      <Grid item xs={12}>
        <h4> LANGUAGE, FRAMEWORK & LIBARIES</h4>
      </Grid>
      <Grid
        item
        xs={12}
        id="iconsContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "170px",
          overflowX: "auto",
          flexWrap: "wrap",
          flexBasis: "none",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {renderSvgIcons()}
      </Grid>
    </Grid>
  );
}

export default AboutPage;
