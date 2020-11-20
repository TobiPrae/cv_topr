import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Contact from "/Users/top63vj/cv_topr/src/components/Contact.jsx";

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    left: 0,
    height: 40,
    width: "100%",
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container item xs={12} justify="center">
        <p >
          This website was built with React – © 2020 Tobias Prätori{" "}
        </p>
      </Grid>

      <Grid container item xs={12}>
        <Grid xs={2}></Grid>

        <Grid xs={8}>
          <Contact></Contact>
        </Grid>

        <Grid xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
