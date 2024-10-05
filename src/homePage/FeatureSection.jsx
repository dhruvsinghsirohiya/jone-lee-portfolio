import React, { useState } from "react";
import "./style.css";
import { FaArrowRight, FaBars, FaWifi } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FiTv } from "react-icons/fi";
import { MdAppSettingsAlt } from "react-icons/md";
import { CiExport } from "react-icons/ci";

const features = [
  {
    icon: <FaBars />,
    title: "Business Strategy",
    detail:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <IoBookOutline />,
    title: "App Development",
    detail:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
  },
  {
    icon: <FiTv />,
    title: "Web Development",
    detail:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <MdAppSettingsAlt />,
    title: "Mobile App",
    detail:
      "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    icon: <FaWifi />,
    title: "CEO Marketing",
    detail:
      "Always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    icon: <CiExport />,
    title: "Personal Portfolio",
    detail:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
  },
];

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const openModal = (feature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div id="features" className="w-[90%] py-20 mx-auto">
      <h6 className="text-[#ff014f] text-[14px] uppercase tracking-[2px]">
        Features
      </h6>
      <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-[700] text-[#c4cfde]">
        What I Do
      </h1>
      <div className="w-full my-8 flex-wrap gap-6 md:flex justify-between">
        {features.map((feature, i) => (
          <div
            key={i}
            className="xl:w-[31%] md:w-[48%] mb-7 md:mb-0 w-full home-icon-btn rounded-lg duration-700 cursor-pointer px-6 md:px-8 py-8 md:py-10"
            onClick={() => openModal(feature)}
          >
            <div className="text-[47px] mb-3 text-[#ff014f]">
              {feature.icon}
            </div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#c4cfde] py-4">
              {feature.title}
            </h3>
            <p className="leading-[28px] text-[#c4cfde] font-semibold text-[16px]">
              {feature.detail}
            </p>
            <FaArrowRight className="mt-6 text-[26px] text-[#ff014f]" />
          </div>
        ))}
      </div>

      {selectedFeature && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 md:p-8 rounded-lg w-3/4 md:w-1/2">
            <h2 className="md:text-xl text-[18px] font-bold text-[#ff014f]">
              {selectedFeature.title}
            </h2>
            <div className="md:text-lg text-[16px] mt-4">
              {selectedFeature.detail}
            </div>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-[#ff014f] text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureSection;
