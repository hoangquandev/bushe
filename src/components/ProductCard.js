import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import imgProduct from "../images/homepage.png";

const useStyles = makeStyles((theme) => ({
  container: {
    // width: "100%",
    height: "100%",
  },
  addToCart: {
    border: "1px solid",
    backgroundColor: "#FFF",
    width: "100%",
    height: "50px",
  },
  imgProduct: {
    maxWidth: "100%",
    height: "100%",
  },
}));

const ProductCard = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid item xs={12}>
        <img src={imgProduct} alt="product" className={classes.imgProduct} />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <h2>title</h2>
            <p>
              <span>$ </span>20
            </p>
          </Grid>
          <Grid item xs={6}>
            <button className={classes.addToCart}>Add to cart</button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
