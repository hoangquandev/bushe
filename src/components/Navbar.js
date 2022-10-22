import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  nav: {
    padding: "0 100px",
    fontSize: "16px",
    display: "center",
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.nav}>
      <Grid item xs={12 / 9} className={classes.navList}>
        Home
      </Grid>
      <Grid item xs={12 / 9} className={classes.dot}>
        ■
      </Grid>
      <Grid item xs={12 / 9} className={classes.navList}>
        Products
      </Grid>
      <Grid item xs={12 / 9} className={classes.dot}>
        ■
      </Grid>
      <Grid item xs={12 / 9} className={classes.navList}>
        Custom
      </Grid>
      <Grid item xs={12 / 9} className={classes.dot}>
        ■
      </Grid>
      <Grid item xs={12 / 9} className={classes.navList}>
        About
      </Grid>
      <Grid item xs={12 / 9} className={classes.dot}>
        ■
      </Grid>
      <Grid item xs={12 / 9} className={classes.navList}>
        Contact
      </Grid>
    </Grid>
  );
};

export default Navbar;
