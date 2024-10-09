import React, { useState } from "react";
import clientimg1 from "./homeAllImg/clientsImg/client1.png";
import clientimg2 from "./homeAllImg/clientsImg/client2.png";
import clientimg3 from "./homeAllImg/clientsImg/client4.png";
import clientimg4 from "./homeAllImg/clientsImg/client5.png";
import "./style.css";

const Clients = () => {
  const categories = [
    { name: "JavaScript", clients: ["John Due", "Smiths Marth"] },
    { name: "Product Design", clients: ["Add Dev"] },
    { name: "WordPress", clients: ["Jone Due", "John Due"] },
    { name: "HTML to React", clients: ["Adon Smith"] },
    { name: "React To Laravel", clients: ["Smitha Mila"] },
    { name: "Python", clients: ["Sultana Mila", "Jannat"] },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const allClients = [
    {
      name: "John Due",
      logo: clientimg1,
      category: "JavaScript",
    },
    {
      name: "Smiths Marth",
      logo: clientimg2,
      category: "JavaScript",
    },
    {
      name: "Add Dev",
      logo: clientimg3,
      category: "Product Design",
    },
    {
      name: "Jone Due",
      logo: clientimg4,
      category: "WordPress",
    },
    {
      name: "John Due",
      logo: clientimg1,
      category: "WordPress",
    },
    {
      name: "Adon Smith",
      logo: clientimg2,
      category: "HTML to React",
    },
    {
      name: "Smitha Mila",
      logo: clientimg3,
      category: "React To Laravel",
    },
    {
      name: "Sultana Mila",
      logo: clientimg4,
      category: "Python",
    },
    {
      name: "Jannat",
      logo: clientimg1,
      category: "Python",
    },
  ];

  const filteredClients =
    selectedCategory === "All"
      ? allClients
      : allClients.filter((client) => client.category === selectedCategory);

  return (
    <div id="clients" className="w-[90%] py-5 mx-auto text-white">
      <h6 className="text-[#ff014f] text-center md:text-left text-[14px] uppercase tracking-[2px]">
        Popular Clients
      </h6>
      <h1 className="text-2xl md:text-[40px] text-center md:text-left lg:leading-[70px] py-2 lg:py-0 lg:text-[60px] font-[700] text-[#c4cfde]">
        Awesome Clients
      </h1>
      <div className="md:flex justify-between">
        <div className="md:w-1/4 w-full py-2 md:py-8">
          <ul className="flex flex-col">
            <li
              onClick={() => setSelectedCategory("All")}
              className={`py-4 md:pt-2  text-center md:text-left md:ps-4 text-[16px] xl:text-xl font-medium cursor-pointer ${
                selectedCategory === "All" ? "text-[#ff014f]" : ""
              }`}
            >
              All
            </li>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={` py-4 text-center md:text-left md:p-4 text-[16px] lg:text-xl font-medium cursor-pointer ${
                  selectedCategory === category.name ? "text-[#ff014f]" : ""
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4 py-4 md:py-8">
          <h1 className="w-full text-[20px] text-center md:text-left md:text-[25px] lg:text-4xl font-bold mb-10 md:mb-4">
            {selectedCategory === "All"
              ? "All Clients"
              : selectedCategory + " Clients"}
          </h1>
          <div className="w-full py-4 md:py-8 md:flex flex-wrap gap-4 lg:gap-6">
            {filteredClients.map((client, index) => (
              <div
                key={index}
                className="home-icon-btn cursor-pointer w-full md:w-[30%] bg-gray-800 rounded-lg shadow-lg flex flex-col mb-5 md:mb-0 items-center justify-center"
              >
                <div className="mt-10 mb-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-lg border-t border-gray-500 w-full py-4 text-center mt-4 font-semibold">
                  {client.name}
                </h3>
              </div>
            ))}
            {filteredClients.length === 0 && (
              <p className="w-full text-xl text-center">
                No clients available for this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
