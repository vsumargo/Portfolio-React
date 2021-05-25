import upcycleImg1 from "../images/project-screenshots/upcycle/Upcycle-Searchpage-min.JPG";
import upcycleImg2 from "../images/project-screenshots/upcycle/Upcycle-Notifications-min.JPG";
import upcycleImg3 from "../images/project-screenshots/upcycle/Upcycle-ViewItempage-min.JPG";
import jiffyImg1 from "../images/project-screenshots/jiffy/company-dashboard-min.PNG";
import jiffyImg2 from "../images/project-screenshots/jiffy/company-calendar-min.PNG";
import jiffyImg3 from "../images/project-screenshots/jiffy/company-view-posted-jobs-min.PNG";
import recibitsImg1 from "../images/project-screenshots/recibits/saved_recipe-min.png";
import recibitsImg2 from "../images/project-screenshots/recibits/list_of_12-min.png";
import recibitsImg3 from "../images/project-screenshots/recibits/detailed_recipe-min.png";

const projectsData = [
  {
    img: [upcycleImg1, upcycleImg2, upcycleImg3],
    title: "Upcycle",
    subtitle: "Upcycle Marketplace",
    description:
      "A MERN stack web application for user to buy and sell their preloved items",
    frontEnd: "React.js, Material-UI",
    backEnd: "Node.js, Express, MongoDB",
    url: "https://upcycle-marketplace-reactjs.herokuapp.com/",
    github: "https://github.com/vsumargo/Upcycle-Marketplace-React.Js",
  },
  {
    img: [jiffyImg1, jiffyImg2, jiffyImg3],
    title: "Jiffy",
    subtitle: "Jiffy",
    description:
      "A web application that link Construction companies with labourers.",
    frontEnd: "Javascript, Bootstrap, CSS3",
    backEnd: "Node.js, Express, MySQL, Sequelize",
    url: "https://project2-will.herokuapp.com/",
    github: "https://github.com/vsumargo/sos-labour",
  },
  {
    img: [recibitsImg1, recibitsImg2, recibitsImg3],
    title: "Reci-bits",
    subtitle: "Reci-bits",
    description:
      "A recipe generator as user input ingredients inside their fridge and pantry",
    frontEnd: "jQuery, Materialize, CSS3",
    backEnd: "none",
    url: "https://vsumargo.github.io/reci-bits/",
    github: "https://github.com/vsumargo/reci-bits",
  },
];

export default projectsData;
