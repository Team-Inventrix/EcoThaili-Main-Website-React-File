import React, { useEffect } from "react";
import Header from "../component/Header";
import FAQ from "../component/FAQ";
import Footer from "../component/Footer";
import OurStory from "../component/OurStory";
import ProblemWeAreSolving from "../component/ProblemStatement";
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
      <Header active_item="Header" id="h"/>
      <MainSlider active_item="Our Story" id="ms" />
      <OurStory active_item="Our Story" id="os" />
      <ProblemWeAreSolving active_item="Problem We Are Solving" id="pwas" />
      <MaterialComposition active_item="Material Composition" id="mc" />
      <ManufacturingProcess active_item="Manufacturing Process" id="mp" />
      <OurImpact active_item="Our Impact" id="oi" />
      <Product active_item="Product" id="p" />
      <FAQ active_item="FAQ" id="faq" />
      <About active_item="About Us" id="a" />
      <Footer active_item="Footer" id="f" />
    </>
  );
}
