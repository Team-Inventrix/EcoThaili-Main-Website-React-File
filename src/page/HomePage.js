import React, { useEffect } from "react";
import Header from "../component/Header";
import FAQ from "../component/FAQ";
import Footer from "../component/Footer";
import OurStory from "../component/OurStory";
import ProblemStatement from "../component/ProblemStatement";
import MaterialComposition from "../component/MaterialComposition";
import OurImpact from "../component/OurImpact";
import About from "../component/About";
import Product from "../component/Product";
import ManufacturingProcess from "../component/ManufacturingProcess";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HeroSection from "../component/HeroSection";

export default function HomePage() {
  useEffect(() => {
    const hash = globalThis.location.hash;
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
      <Header />
      <HeroSection />
      <OurStory />
      <ProblemStatement />
      <MaterialComposition />
      <ManufacturingProcess />
      <OurImpact />
      <Product />
      <FAQ />
      <About />
      <Footer />
    </>
  );
}