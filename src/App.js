import React from "react";
import { createTheme } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Products from "./pages/Products";
import HomePage from "./pages/HomePage";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFF",
    },
  },
});
const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      {/* <Products /> */}
      <Footer />
    </div>
  );
};

export default App;
