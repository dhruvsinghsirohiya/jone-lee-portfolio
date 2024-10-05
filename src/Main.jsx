import React from "react";
import Navbar from "./comman/navbar/Navbar";
import HomeSection from "./homePage/HomeSection";
import FeatureSection from "./homePage/FeatureSection";
import { IoMdArrowRoundUp } from "react-icons/io";

const Main = () => {
  return (
    <>
      <div id="home" className="w-[100%] relative">
        <Navbar />
        <HomeSection />
        <FeatureSection />
        <a
          href="#home"
          className="bg-[#ff014f] text-white fixed text-[30px] rounded-full hover:text-[#ff014f] p-3 cursor-pointer hover:bg-white right-[1.5%] bottom-[1.5%]"
        >
          <IoMdArrowRoundUp />
        </a>
      </div>
    </>
  );
};

export default Main;
