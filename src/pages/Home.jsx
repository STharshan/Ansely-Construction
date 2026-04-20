import React from "react";
import About from "../components/Home/About";
import CtaContactSection from "../components/Home/CtaContactSection";
import Hero from "../components/Home/HeroSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <CtaContactSection />
    </div>
  );
};

export default Home;
