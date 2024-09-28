// Navbar.js
import React, { useState } from 'react';
import logo from "./navbarImg/logo.png";
import "./style.css";
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';


const Navbar = () => {    
const [toggle, setToggle] = useState(false);

const handleToggle = () => {
    setToggle(!toggle);
}
  return ( // Adding the return statement
    <div className="lg:w-[95%] px-2 lg:px-0 relative flex justify-between items-center mx-auto text-white py-4 lg:py-6 ">
        <img src={logo} className='h-[55px] lg:h-[70px]' alt="" />
        <ul className={`hidden lg:flex text-[#c4cfde] justify-start text-[13px] gap-8 items-center uppercase`}>
            <li className='lg:hover:text-white cursor-pointer duration-200'>Home</li>
            <li className='lg:hover:text-white cursor-pointer duration-200'>Features</li>
            <li className='lg:hover:text-white cursor-pointer duration-200'>Portfolio</li>
            <li className='lg:hover:text-white cursor-pointer duration-200'>Resume</li>
            <li className='lg:hover:text-white cursor-pointer duration-200'>Clients</li>
            <li className='lg:hover:text-white cursor-pointer duration-200'>Pricing</li>
            <li className='lg:hover:text-white cursor-pointer duration-200'>Blog</li>
            <li className='lg:hover:text-white cursor-pointer duration-200'>Contact</li>
            <li className='buy-btn text-[#ff014f] rounded-md px-4 cursor-pointer duration-200 hover:shadow-xl py-4 shadow-md'>Buy Now</li>
        </ul>
    {/* Mobile Device */}
        <ul className={` ${toggle === false ? "hidden nav-items-hidden" : "flex nav-items"} duration-500 lg:hidden absolute w-full h-[100vh] top-0 left-0 bg-white text-black justify-center flex-col text-[13px] gap-6  items-center uppercase`}>
            <li onClick={handleToggle} className='lg:hidden cursor-pointer text-[26px] block'>
            <IoClose />
            </li>
            <li onClick={handleToggle} className='cursor-pointer font-bold duration-200'>Home</li>
            <li onClick={handleToggle} className='cursor-pointer font-bold duration-200'>Features</li>
            <li onClick={handleToggle} className='cursor-pointer font-bold duration-200'>Portfolio</li>
            <li onClick={handleToggle} className='cursor-pointer font-bold duration-200'>Resume</li>
            <li onClick={handleToggle} className='cursor-pointer font-bold duration-200'>Clients</li>
            <li onClick={handleToggle} className='cursor-pointer font-bold duration-200'>Pricing</li>
            <li onClick={handleToggle} className='cursor-pointer font-bold duration-200'>Blog</li>
            <li onClick={handleToggle} className='cursor-pointer font-bold duration-200'>Contact</li>
            <li onClick={handleToggle} className='buy-btn text-[#ff014f] rounded-md px-4 cursor-pointer duration-200 hover:shadow-xl py-4 shadow-md'>Buy Now</li>
        </ul>
        <FaBars onClick={handleToggle} className='lg:hidden text-[22px] cursor-pointer block'/>
    </div>
  );
}

export default Navbar; // Exporting Navbar
