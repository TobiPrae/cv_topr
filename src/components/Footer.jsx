import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "rgba(175, 175, 175, 0.6)",
    bottom: 0,
    left: 0,
    marginTop: 20,
    height: 50,
    width: "100%",
    color: "black"
  }

}));

const Footer = () => {
  const classes = useStyles();

  return (
  <div className={classes.footer}>
    <p>© 2020 Tobias Prätori</p>
  </div>
);
}

export default Footer;