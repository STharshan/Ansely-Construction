import React from "react";
import About from "../components/Home/About";
import CtaContactSection from "../components/Home/CtaContactSection";
import Hero from "../components/Home/HeroSection";
import HowWeWork from "../components/Home/HowWeWork";
import Whowebuild from "../components/Home/Whowebuild";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <HowWeWork />
      <Whowebuild />
      <CtaContactSection />
    </div>
  );
};

export default Home;
