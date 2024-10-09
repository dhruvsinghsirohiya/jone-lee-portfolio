import React from "react";
import "./style.css";

const WorkAndResume = () => {
  const educationExperience = [
    {
      title: "Secondary Education",
      year: "2018",
      college: "Zenith Int. School",
      description: "10th: 85%",
    },
    {
      title: "Senior Secondary Education",
      year: "2020",
      college: "Pinnacle High",
      description: "12th: 92%",
    },
    {
      title: "B.Tech",
      year: "2024",
      college: "Avalon Institute",
      description: "...",
    },
    {
      title: "Diploma in Web Dev",
      year: "2021",
      college: "CyberTech Inst.",
      description: "Web Dev Diploma.",
    },
    {
      title: "Full Stack Course",
      year: "2022",
      college: "CodeMasters",
      description: "Completed MERN cert.",
    },
    {
      title: "Internship",
      year: "2022",
      college: "Future Innovations",
      description: "6-month internship.",
    },
  ];
  

  const softwareSkills = [
    { skillName: "HTML5", skillGrowth: "90%", skillColor: "#03c04a" },
    { skillName: "CSS3", skillGrowth: "90%", skillColor: "#03c04a" },
    { skillName: "JavaScript", skillGrowth: "70%", skillColor: "#fff70d" },
    { skillName: "Bootstrap 3/4/5", skillGrowth: "80%", skillColor: "#03c04a" },
    { skillName: "React JS", skillGrowth: "90%", skillColor: "#03c04a" },
    { skillName: "Next JS", skillGrowth: "60%", skillColor: "#fff70d" },
    { skillName: "Tailwind CSS", skillGrowth: "95%", skillColor: "#03c04a" },
    { skillName: "jQuery", skillGrowth: "50%", skillColor: "#fff70d" },
    { skillName: "Git & Github", skillGrowth: "80%", skillColor: "#03c04a" },
    { skillName: "Node JS", skillGrowth: "60%", skillColor: "#fff70d" },
    { skillName: "Mongo DB", skillGrowth: "60%", skillColor: "#fff70d" },
    { skillName: "Express JS", skillGrowth: "60%", skillColor: "#fff70d" },
    {
      skillName: "Photoshop CC & CS6",
      skillGrowth: "40%",
      skillColor: "yellow",
    },
  ];

  return (
    <div id="resume" className="py-20 text-white w-[90%] mx-auto">
      <a
        href="Resume.pdf"
        download={"Resume.pdf"}
        className="px-8 home-banner cursor-pointer banner-shadow duration-300 hover:border-white border-[#ff014f] border py-2.5"
      >
        Resume
      </a>
      <div className="lg:flex gap-4 justify-between ">
        {/* Education & Experience Section */}
        <div className="lg:w-[50%] w-full py-4">
          <div className="py-6 scale-100 mb-8 hover:scale-105 duration-200 cursor-pointer text-[#ff014f] text-[22px] md:text-[30px] xl:text-[40px] font-semibold ">
            Education & Experience
          </div>
          {educationExperience.map((data, index) => {
            return (
              <div
                key={index}
                className="border mb-10 lg:mb-12 xl:mb-20 px-4 rounded-xl bg-gray-overlay flex justify-between items-center py-6 md:py-10"
              >
                <div className="">
                  <div className="text-[18px] xl:text-[22px] font-semibold">
                    {data.title}
                  </div>
                  <div className="text-[#c4cfde] pb-1 text-[14px] md:text-[16px] pt-1">
                    {data.college}
                  </div>
                  <div className="text-[12px] text-[#ff014f]">
                    {data.description}
                  </div>
                </div>
                <div className="text-[14px] md:text-[16px] shadow-xl cursor-pointer font-bold hover:bg-[#ff014f] duration-200 hover:text-black rounded-2xl bg-gray-800 px-3 py-1">
                  {data.year}
                </div>
              </div>
            );
          })}
        </div>
        {/* Software Skills Section */}
        <div className="lg:w-[50%] py-4">
          <div className="py-6 text-[#ff014f]  mb-8  scale-100 hover:scale-105 duration-200 cursor-pointer text-[22px] md:text-[30px] xl:text-[40px] font-semibold ">
            Software Skills
          </div>
          {softwareSkills.map((item, index) => {
            return (
              <div
                key={index}
                className="border cursor-pointer px-4 mb-6 rounded-xl bg-gray-overlay items-center py-4"
              >
                <div className="flex py-2 items-center justify-between">
                  <div className="text-[16px] md:text-[20px]">
                    {item.skillName}
                  </div>
                  <div className="">{item.skillGrowth}</div>
                </div>
                <div className="w-[100%] rounded-lg overflow-hidden bg-gray-500">
                  <div
                    className={"py-1.5"}
                    style={{
                      width: item.skillGrowth,
                      backgroundColor: item.skillColor,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkAndResume;
