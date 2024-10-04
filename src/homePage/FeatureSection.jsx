import React from "react";
import "./style.css";
import { FaArrowRight, FaBars, FaWifi } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FiTv } from "react-icons/fi";
import { MdAppSettingsAlt } from "react-icons/md";
import { CiExport } from "react-icons/ci";

const features = [
  {
    icon: <FaBars className="text-[47px] mb-3 text-[#ff014f]" />,
    title: "Business Strategy",
    detail:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <IoBookOutline className="text-[50px] mb-3 text-[#ff014f]" />,
    title: "App Development",
    detail:
      " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
  },
  {
    icon: <FiTv className="text-[50px] mb-3 text-[#ff014f]" />,
    title: "App Development",
    detail:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <MdAppSettingsAlt className="text-[50px] mb-3 text-[#ff014f]" />,
    title: "Mobile App",
    detail:
      "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    icon: <FaWifi className="text-[50px] mb-3 text-[#ff014f]" />,
    title: "CEO Marketing",
    detail:
      "always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    icon: <CiExport className="text-[50px] mb-3 text-[#ff014f]" />,
    title: "Personal Portfolio",
    detail:
      " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
  },
];

const FeatureSection = () => {
  return (
    <div className="w-[90%] py-20 mx-auto">
      <div className="px-16">
        <h6 className="text-[#ff014f] text-[14px] uppercase tracking-[2px]">
          Features
        </h6>
        <h1 className="text-[60px] font-[700] text-[#c4cfde]">What I Do</h1>
        <div className="w-full my-8 flex-wrap gap-6 flex justify-between">
          {features.map((d, i) => (
            <div
              key={i}
              className="w-[31%] home-icon-btn rounded-lg duration-700 cursor-pointer px-8 py-10"
            >
              {d.icon}
              <h3 className="text-[24px] font-semibold text-[#c4cfde] py-4">
                {d.title}
              </h3>
              <p className="leading-[28px] text-[#c4cfde] font-semibold text-[16px]">
                {d.detail}
              </p>
              <FaArrowRight className="mt-6 text-[26px] text-[#ff014f]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
