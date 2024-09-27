// Navbar.js
import React from 'react';
import logo from "./navbarImg/logo.png";
import "./style.css";

const Navbar = () => {
  return ( // Adding the return statement
    <div className="w-[95%] flex justify-between items-center mx-auto text-white py-6 ">
        <img src={logo} className='h-[70px]' alt="" />
        <ul className='flex text-[#c4cfde] text-[13px] gap-8 items-center uppercase'>
            <li className='hover:text-white cursor-pointer duration-200'>Home</li>
            <li className='hover:text-white cursor-pointer duration-200'>Features</li>
            <li className='hover:text-white cursor-pointer duration-200'>Portfolio</li>
            <li className='hover:text-white cursor-pointer duration-200'>Resume</li>
            <li className='hover:text-white cursor-pointer duration-200'>Clients</li>
            <li className='hover:text-white cursor-pointer duration-200'>Pricing</li>
            <li className='hover:text-white cursor-pointer duration-200'>Blog</li>
            <li className='hover:text-white cursor-pointer duration-200'>Contact</li>
            <li className='buy-btn text-[#ff014f] rounded-md px-4 cursor-pointer duration-200 hover:shadow-xl py-4 shadow-md'>Buy Now</li>
        </ul>
    </div>
  );
}

export default Navbar; // Exporting Navbar
