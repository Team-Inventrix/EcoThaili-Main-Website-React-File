import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";
import OurStory from "./component/OurStory";
import ProblemWeAreSolving from "./component/ProblemWeAreSolving";
import MaterialComposition from "./component/MaterialComposition";
import OurImpact from "./component/OurImpact";
import About from "./component/About";
import Product from "./component/Product";
import MainSlider from "./component/MainSlider";


function App() {
  return (
    <Router>
      <MainSlider />
      <Header active_item="Our Story" />
      <OurStory active_item="Our Story" />
      <ProblemWeAreSolving active_item="Our Story" />
      <MaterialComposition active_item="Our Story" />
      <OurImpact active_item="Our Story" />
      <Product active_item="Our Story" />
      <FAQ active_item="Our Story" />
      <About active_item="Our Story" />
      <Footer active_item="Our Story" />
    </Router>
  );
}

export default App;
