import React, { useEffect } from "react";
import Header from "../component/Header";
import FAQ from "../component/FAQ";
import Footer from "../component/Footer";
import OurStory from "../component/OurStory";
import ProblemWeAreSolving from "../component/ProblemWeAreSolving";
import MaterialComposition from "../component/MaterialComposition";
import OurImpact from "../component/OurImpact";
import About from "../component/About";
import Product from "../component/Product";
import MainSlider from "../component/MainSlider";
import TermsAndCondition from "../component/TermsAndCondition";
import PrivacyPolicy from "../component/PrivacyPolicy";
import ManufacturingProcess from "../component/ManufacturingProcess";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionElement = document.querySelector(hash);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <SpeedInsights />
      <MainSlider />
      <Header active_item="Our Story" />
      <OurStory active_item="Our Story" id="os" />
      <ProblemWeAreSolving active_item="Our Story" id="pwas" />
      <MaterialComposition active_item="Our Story" id="mc" />
      <ManufacturingProcess active_item="Our Story" id="mp" />
      <OurImpact active_item="Our Story" id="oi" />
      <Product active_item="Our Story" id="product" />
      <FAQ active_item="Our Story" id="faq" />
      <About active_item="Our Story" id="about" />
      <Footer active_item="Our Story" id="footer" />
    </>
  );
}
