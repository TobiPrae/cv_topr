import React from "react";

//files
import SmartCas from "/Users/top63vj/cv_topr/src/files/SmartCas.png";

//material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 300,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: 20 }}>
      <Grid container item xs={12}>
        <Grid item xs={9}>
          <p style={{ textAlign: "left", fontSize: 42 }}>
            Hi, my name is <b>Tobias</b>.
          </p>
          <p style={{ textAlign: "left", fontSize: 18 }}>
            After my vocational training as an industrial clerk at a large
            German automotive supplier I started studying Information Systems.
            Since completing my masters degree, I have been working as a
            research assistant at the University of Würzburg where I am also a
            Phd candidate. My passion is to analyze data and to visualize my
            results. Please check out my projects below!
          </p>
        </Grid>
        <Grid item xs={3}>
          <img className={classes.image} src={SmartCas} alt="Tobi" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
