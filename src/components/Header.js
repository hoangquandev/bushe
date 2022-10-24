import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90px",
    padding: "0 100px",
    borderBottom: "0.5px solid",
  },
  headerMobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90px",
    padding: "0 10px",
    borderBottom: "0.5px solid",
  },
  rightHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    gap: "30px",
  },
  button: {
    border: "none",
    backgroundColor: "transparent",
    paddingRight: "2rem",
    "&:hover": {
      color: "green",
    },
    cursor: "pointer",
  },
  cart: {
    cursor: "pointer",
    fontWeight: 300,
    lineHeight: "100%",
    "&:hover": {
      color: "green",
    },
  },
}));

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};
const Header = () => {
  const classes = useStyles();
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  if (isMobile) {
    return (
      <Grid container spacing={0} className={classes.headerMobile}>
        <Grid item xs={6}>
          Bushe
        </Grid>

        <Grid item xs={6} className={classes.rightHeader}>
          <MenuOutlinedIcon />

          <LocalMallOutlinedIcon className={classes.cart} />
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container spacing={0} className={classes.header}>
      <Grid item xs={2}>
        Bushe
      </Grid>
      <Grid item xs={8}>
        <Navbar />
      </Grid>
      <Grid item xs={2} className={classes.rightHeader}>
        <button className={classes.button}>Eng</button>
        <LocalMallOutlinedIcon className={classes.cart} />
      </Grid>
    </Grid>
  );
};

export default Header;
