import React from "react";
import Navbar from "./comman/navbar/Navbar";
import HomeSection from "./homePage/HomeSection";
import FeatureSection from "./homePage/FeatureSection";

const Main = () => {
  return (
    <div className="w-[100%]">
      <Navbar />
      <HomeSection />
      <FeatureSection/>
    </div>
  );
};

export default Main;
