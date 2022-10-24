import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Stack } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  footer: {
    height: "200px",
    borderTop: "0.5px solid",
  },
  itemFooter: {
    border: "0.5px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs={4} className={classes.itemFooter}>
        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={6}
        >
          <div>
            <h1>Bushe</h1>
          </div>
          <div>+099 999 999</div>
          <div>Copyright ©2022 Bushe. All rights reserved.</div>
        </Stack>
      </Grid>
      <Grid item xs={4} className={classes.itemFooter}>
        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={4}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              Products
            </Grid>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              Custom
            </Grid>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              About
            </Grid>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              Contact
            </Grid>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={4} className={classes.itemFooter}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <div>
            <h3>Stay in TOUCH wih us!</h3>
          </div>
          <Grid container spacing={2} style={{ margin: "auto" }}>
            <Grid item xs={3}>
              a
            </Grid>
            <Grid item xs={3}>
              b
            </Grid>
            <Grid item xs={3}>
              c
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
