import React from "react";
import development from "./homeAllImg/portfolioImg/portfolio-01.jpg";
import application from "./homeAllImg/portfolioImg/portfolio-02.jpg";
import photoshop from "./homeAllImg/portfolioImg/portfolio-03.jpg";
import figma from "./homeAllImg/portfolioImg/portfolio-04.jpg";
import webdesign from "./homeAllImg/portfolioImg/portfolio-05.jpg";
import webdesign2 from "./homeAllImg/portfolioImg/portfolio-06.jpg";
import "./style.css";
import { FaRegHeart } from "react-icons/fa";

const PortfolioSection = () => {
  const portImg = [
    {
      img: development,
      title: "Development",
      likes: "600",
      detail: "The services provide for design",
    },
    {
      img: application,
      title: "Application",
      likes: "750",
      detail: "Mobile app landing design & app maintain",
    },
    {
      img: photoshop,
      title: "Photoshop",
      likes: "630",
      detail: "Logo design creativity & Application",
    },
    {
      img: figma,
      title: "Figma",
      likes: "360",
      detail: "Mobile app landing design & Services",
    },
    {
      img: webdesign,
      title: "Web Design",
      likes: "280",
      detail: "Design for tecnology & services",
    },
    {
      img: webdesign2,
      title: "Web Desgin",
      likes: "690",
      detail: "App for tecnology & services",
    },
  ];

  return (
    <div id="portfolio" className="w-[90%] border-b border-black py-20 mx-auto">
      <h6 className="text-[#ff014f] text-[14px] text-center leading-[24px] md:leading-[14px] tracking-[1px] uppercase">
        Visit my portfolio and keep your feedback
      </h6>
      <h1 className="text-[#c4cfde] text-[34px] md:text-[40px] lg:text-[60px] my-2 text-center font-bold">
        My Portfolio
      </h1>
      <div className="w-full my-8 flex-wrap gap-6 md:flex justify-between">
        {portImg.map((port, i) => (
          <div
            key={i}
            className="xl:w-[31%] md:w-[48%] mb-7 md:mb-0 w-full home-icon-btn rounded-lg duration-[900] flex justify-center items-center flex-col cursor-pointer px-6 md:px-8 py-8 md:py-8"
          >
            <div className="w-full mb-1 portfolio-img rounded-xl">
              <img src={port.img} className="w-full" alt="" />
            </div>
            <div className="w-full flex  px-1 my-3 justify-between">
              <p className="text-[#ff014f] text-[12px] tracking-[1px] uppercase">
                {port.title}
              </p>
              <p className="flex text-[13px] gap-1 items-center text-[#c4cfde]">
                <FaRegHeart />
                <span>{port.likes}</span>
              </p>
            </div>
            <div className="text-[20px] md:text-[23px] px-1 text-[#c4cfde] font-semibold">
              {port.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
