import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import imgHomePage from "../images/homepage.png";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "calc(100vh-90px)",
    overflowY: "hidden",
  },
  item: {
    border: "0.5px solid",
    borderCollapse: "collapse",
    width: "calc(100vw/16)",
    height: "calc(100vw/16)",
  },
  itemAnimate: {
    border: "0.5px solid",
    borderCollapse: "collapse",
    width: "calc(100vw/16)",
    height: "calc(100vw/16)",
    backgroundColor: "transparent",
    animation: "$colorChange 1.5s infinite",
  },
  itemAnimateAfter: {
    border: "0.5px solid",
    borderCollapse: "collapse",
    width: "calc(100vw/16)",
    height: "calc(100vw/16)",
    backgroundColor: "#FFF",
    animation: "$colorChangeAfter 1.5s  infinite",
  },
  backGroundImage: {
    backgroundImage: `url(${imgHomePage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  logoShop: {
    height: "calc(100vw/8)",
    border: "0.5px solid",
    fontSize: "8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  shopNow: {
    height: "calc(100vw/16)",
    border: "0.5px solid",
    fontSize: "2.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  "@keyframes colorChange": {
    from: { backgroundColor: "#FFF" },
    to: { backgroundColor: "transparent" },
  },
  "@keyframes colorChangeAfter": {
    from: { backgroundColor: "transparent" },
    to: { backgroundColor: "#FFF" },
  },
}));
const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12 / 16}>
        <Grid container>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={9 / 2} className={classes.backGroundImage}>
        <Grid container>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={12} className={classes.itemAnimateAfter}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.itemAnimateAfter}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.itemAnimateAfter}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimateAfter}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimateAfter}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimateAfter}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimateAfter}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={12} className={classes.itemAnimateAfter}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemAnimate}></Grid>
              <Grid item xs={12} className={classes.itemAnimateAfter}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12 / 16}>
        <Grid container>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12 / 16}>
        <Grid container>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container xs={12}>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
        </Grid>
        <Grid container xs={12} className={classes.logoShop}>
          <div style={{ width: "100%" }}>Bushe</div>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
        </Grid>
        <Grid container xs={12} className={classes.shopNow}>
          SHOP NOW
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
          <Grid item xs={3} className={classes.item}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12 / 16}>
        <Grid container>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12 / 16}>
        <Grid container>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12 / 16}>
        <Grid container>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
          <Grid item xs={12} className={classes.item}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
