import React from "react";

//files
import SmartCas from "/Users/top63vj/cv_topr/src/files/SmartCas.png";

//material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 300,
    resizeMode: "contain",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container item xs={12}>
        <Grid item xs={8} alignContent="center" justify="center">
          <p style={{ textAlign: "left", fontSize: 42 }}>
            Hi, my name is <b>Tobias</b>.
          </p>
          <p style={{ textAlign: "justify", fontSize: 22 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. 
          </p>
        </Grid>

        <Grid item xs={4}>
          <img className={classes.image} src={SmartCas} alt="Tobi" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
