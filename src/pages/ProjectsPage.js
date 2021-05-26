import "./ProjectsPage.css";
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import IconButton from "@material-ui/core/IconButton";
import projectsData from "../data/projectsData.js";
import ProjectCard from "../components/ProjectCard.js";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     flexWrap: "nowrap",
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: "translateZ(0)",
//   },
// }));

function ProjectsPage() {
  // const classes = useStyles();
  function renderImageTiles() {
    const newArray = projectsData.map((tile) => {
      return (
        <Grid item xs={12} sm={6} xl={3} key={tile.title}>
          <ProjectCard details={tile} />
        </Grid>
      );
    });
    return newArray;
  }
  return (
    <Grid container style={{ padding: "5vw", maxWidth: "100%" }}>
    <Grid item xs={12}>
      <div className="page-title">Project Portfolio</div>
    </Grid>
      <Grid item xs={12}>
        <Grid container className="projectpage-image-container" spacing={2} alignItems="flex-end">
          {renderImageTiles()}
        </Grid>
      </Grid>
    </Grid>

    // <Grid container style={{ padding: "5vw", maxWidth: "100%" }}>
    //   <Grid item xs={12} className={classes.root}>
    //     <GridList className={classes.gridList} cols={2.5}>
    //       {projectsData.map((tile) => (
    //         <GridListTile key={tile.title} className={classes.gridListTile}>
    //           <img
    //             className="project-image-icon"
    //             src={tile.img[0]}
    //             alt={tile.title}
    //           />
    //           <GridListTileBar
    //             title={tile.title}
    //             actionIcon={
    //               <IconButton aria-label={`star ${tile.title}`}>
    //                 {/* <StarBorderIcon className={classes.title} /> */}
    //               </IconButton>
    //             }
    //           />
    //         </GridListTile>
    //       ))}
    //     </GridList>
    //   </Grid>
    // </Grid>
  );
}

export default ProjectsPage;
