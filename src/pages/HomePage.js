import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import imgHomePage from "../images/homepage.png";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "calc(100vh-90px)",
    overflowY: "hidden",
  },
  containerMobile: {
    height: "calc(100vh-90px)",
    overflow: "hidden",
    display: "flex",
    margin: "0 auto",
  },
  item: {
    border: "0.5px solid",
    width: "calc(100vw/16)",
    height: "calc(100vw/16)",
  },
  itemHaft: {
    border: "0.5px solid",
    borderBottom: "none",
    width: "calc(100vw/8)",
    height: "calc(100vw/16)",
  },
  itemAnimate: {
    border: "0.5px solid",
    width: "calc(100vw/16)",
    height: "calc(100vw/16)",
    backgroundColor: "transparent",
    animation: "$colorChange 2s ease alternate-reverse infinite ",
  },
  itemAnimateAfter: {
    border: "0.5px solid",
    width: "calc(100vw/16)",
    height: "calc(100vw/16)",
    backgroundColor: "#FFF",
    animation: "$colorChange 2s ease alternate infinite ",
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
  logoShopMobile: {
    height: "calc(100vw/8)",
    border: "0.5px solid",
    fontSize: "2rem",
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
  shopNowMobile: {
    height: "calc(100vw/4)",
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
const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};
const HomePage = () => {
  const classes = useStyles();
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  if (isMobile) {
    return (
      <>
        <Grid container className={classes.containerMobile}>
          <Grid item xs={12 / 32}>
            <Grid container>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemHaft}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={(5 * 12) / 8} className={classes.backGroundImage}>
            <Grid container>
              <Grid item xs={12 / 5}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    className={classes.itemAnimateAfter}
                  ></Grid>
                  <Grid item xs={12} className={classes.itemAnimate}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.itemAnimate}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.itemAnimate}></Grid>
                  <Grid item xs={12} className={classes.itemHaft}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12 / 5}>
                <Grid container>
                  <Grid item xs={12} className={classes.itemAnimate}></Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.itemAnimateAfter}
                  ></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.itemAnimate}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.itemAnimateAfter}
                  ></Grid>
                  <Grid item xs={12} className={classes.itemHaft}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12 / 5}>
                <Grid container>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.itemAnimate}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.itemAnimateAfter}
                  ></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.itemHaft}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12 / 5}>
                <Grid container>
                  <Grid item xs={12} className={classes.itemAnimate}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.itemAnimateAfter}
                  ></Grid>
                  <Grid item xs={12} className={classes.itemHaft}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12 / 5}>
                <Grid container>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.itemAnimateAfter}
                  ></Grid>
                  <Grid item xs={12} className={classes.itemAnimate}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.item}></Grid>
                  <Grid item xs={12} className={classes.itemAnimate}></Grid>
                  <Grid item xs={12} className={classes.itemHaft}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={(2 * 12) / 8}>
            <Grid container xs={12}>
              <Grid item xs={6} className={classes.item}></Grid>
              <Grid item xs={6} className={classes.item}></Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={6} className={classes.item}></Grid>
              <Grid item xs={6} className={classes.item}></Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={6} className={classes.item}></Grid>
              <Grid item xs={6} className={classes.item}></Grid>
            </Grid>
            <Grid container xs={12} className={classes.logoShopMobile}>
              <div style={{ width: "100%" }}>Bushe</div>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={6} className={classes.item}></Grid>
              <Grid item xs={6} className={classes.item}></Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={6} className={classes.item}></Grid>
              <Grid item xs={6} className={classes.item}></Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={6} className={classes.item}></Grid>
              <Grid item xs={6} className={classes.item}></Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={6} className={classes.item}></Grid>
              <Grid item xs={6} className={classes.item}></Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={6} className={classes.itemHaft}></Grid>
              <Grid item xs={6} className={classes.itemHaft}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12 / 32}>
            <Grid container>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.item}></Grid>
              <Grid item xs={12} className={classes.itemHaft}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.shopNowMobile}>
          SHOP NOW
        </Grid>
      </>
    );
  }
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
          <div style={{ width: "100%", textAlign: "center" }}>Bushe</div>
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
