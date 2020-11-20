import React from "react";

import { Carousel } from "react-responsive-carousel";
import "/Users/top63vj/Documents/GitHub/cv_topr/src/components/carousel.min.css";

//files
import InventoryManagement from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/im.png";
import Thesis from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/thesis.png";
import Dimop from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/dimop.png";
import Shiny from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/shiny.png";
import R from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/r.png";
import Python from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/python.png";
import TensorFlow from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/tf.png";
import Keras from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/keras.png";
import Pandas from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/pandas.png";
import ReactLogo from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/react.png";
import Flask from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/flask.png";
import SQL from "/Users/top63vj/Documents/GitHub/cv_topr/src/files/sql.png";

//material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  image: {
    resizeMode: "contain",
    height: "auto",
    width: 100,
  },
}));

const ProjectsCarousel = () => {
  const classes = useStyles();

  return (
    <div>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        showArrows={true}
        transitionTime={300}
      >
        <div style={{ marginTop: 20, marginBottom: 100  }}>
          <h3 style={{ color: "black" }}>Building a Dashboard for Sales Prediction and Inventory Management</h3>
          <img
            className={classes.image}
            src={InventoryManagement}
            alt="inventory_management"
            style={{padding: 30}}
          />
          <p style={{ color: "black", padding: 30 }}>
            This is a group project that I have completed with fellow students
            from march to october 2019. We developed a dashboard to analyze and
            predict sales for a company that sells wall paints and accessoires.
            My main focus was the implementation of a integrated inventory
            management model.
          </p>
          <Grid container item xs={12} justify="center" alignItems="center">
            <Grid item xs={4}>
              <img src={R} alt="r" style={{ width: "auto", height: 65 }} />
            </Grid>

            <Grid item xs={4} justify="center">
              <img
                src={Shiny}
                alt="shiny"
                style={{ width: "auto", height: 70 }}
              />
            </Grid>
            <Grid item xs={4} justify="center">
              <img
                src={Python}
                alt="python"
                style={{ width: "auto", height: 70 }}
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <h3 style={{ color: "black" }}>Analyzing Social Media Data to Predict the Bitcoin Price</h3>
          <img
            className={classes.image}
            src={Thesis}
            alt="thesis"
            style={{padding: 30}}
          />
          <p style={{ color: "black", padding: 30 }}>
          The research goal of my masters thesis was to investigate which factors influence the Bitcoin price. Over a period of 6 months I crawled data from various sources like Twitter, Reddit and news websites to perform sentiment analysis. I used various features such as sentiments or the number of search queries on Google to predict Bitcoin prices. The results show my neural network model performed better than common regression approaches.
          </p>
          <Grid container item xs={12} justify="center" alignItems="center">
            <Grid item xs={4}>
              <img
                src={TensorFlow}
                alt="tf"
                style={{ width: "auto", height: 70 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={Pandas}
                alt="pandas"
                style={{ width: "auto", height: 70 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={Keras}
                alt="keras"
                style={{ width: "auto", height: 50 }}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <h3 style={{ color: "black" }}>
            Designing a Decision Support Tool to Improve the Recylability of
            Plastic Products
          </h3>
          <img
            className={classes.image}
            src={Dimop}
            alt="Dimop"
            style={{padding: 30}}
          />
          <p style={{ color: "black", padding: 30 }}>The lack of recyclability of plastic products is a major problem in our society today. This tool is designed to support the development process of plastic products by providing designers with multi-criteria decision making methods. It is possible to create several bills of material and compare them with regard to several competing criteria, such as recyclability, CO2 emissions or production costs. </p>
          <Grid container item xs={12} justify="center" alignItems="center">
            <Grid item xs={4}>
              <img
                src={ReactLogo}
                alt="react-logo"
                style={{ width: "auto", height: 65 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={Flask}
                alt="flask"
                style={{ width: "auto", height: 70 }}
              />
            </Grid>
            <Grid item xs={4}>
              <img src={SQL} alt="sql" style={{ width: "auto", height: 50 }} />
            </Grid>
          </Grid>
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
