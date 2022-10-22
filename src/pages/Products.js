import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "60px 100px",
  },
  customProduct: {
    border: "5px dotted ",
    height: "85px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
  },
  ourProducts: {
    height: "85px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.25rem",
    paddingTop: "2rem",
  },
  catalog: {
    padding: "1rem 0",
  },
  topCatalog: {
    paddingBottom: "3rem",
  },
  largeProduct: {
    height: "100%",
  },
}));
const Products = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.customProduct}>
        Create custom granola!
      </Grid>
      <Grid item xs={12} className={classes.ourProducts}>
        Our Products
      </Grid>
      <Grid item xs={12} className={classes.catalog}>
        <Grid container spacing={4} className={classes.topCatalog}>
          <Grid item xs={6}>
            <ProductCard className={classes.largeProduct} />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <ProductCard />
              </Grid>
              <Grid item xs={6}>
                <ProductCard />
              </Grid>
              <Grid item xs={6}>
                <ProductCard />
              </Grid>
              <Grid item xs={6}>
                <ProductCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <ProductCard />
              </Grid>
              <Grid item xs={6}>
                <ProductCard />
              </Grid>
              <Grid item xs={6}>
                <ProductCard />
              </Grid>
              <Grid item xs={6}>
                <ProductCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <ProductCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
