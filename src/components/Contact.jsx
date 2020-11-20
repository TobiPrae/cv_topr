import React from "react";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//files
import LinkedIn from "/Users/top63vj/cv_topr/src/files/linkedin.png";
import Xing from "/Users/top63vj/cv_topr/src/files/xing.png";
import GitHub from "/Users/top63vj/cv_topr/src/files/github.png";

const useStyles = makeStyles((theme) => ({
  contact: {

    color: "white",
  

  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <Grid container item xs={12} alignItems="center" justify="center">
        {" "}
        <Grid item xs={4}>
          <a
            href="https://www.linkedin.com/in/tobias-pr%C3%A4tori-1743481a9/"
            target="_blank"
          >
            <img
              src={LinkedIn}
              alt="linkedin"
              style={{ width: "auto", height: 20}}
            />
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href="https://github.com/TobiPrae/" target="_blank">
            <img
              src={GitHub}
              alt="github"
              style={{ width: "auto", height: 20}}
            />
          </a>
        </Grid>
        <Grid item xs={4}>
          <a
            href="https://www.xing.com/profile/Tobias_Praetori/cv"
            target="_blank"
          >
            <img
              src={Xing}
              alt="xing"
              style={{ width: "auto", height: 30}}
            />
          </a>
        </Grid>
   
      </Grid>
    </div>
  );
};

export default Contact;
