import React from 'react';
import { FaCode, FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiFigma, FiLinkedin } from 'react-icons/fi';
import { SiAdobe } from 'react-icons/si';
import joneLee from "./homeAllImg/banner-01.png";
import "./style.css";
const HomeSection = () => {
    return (
        <div id='#home' className='xl:w-[90%] border-b border-black mt-0 lg:mt-12 sm:w-[90%] w-[95%] md:w-[85%] lg:w-[90%] flex justify-center lg:items-start items-center flex-col lg:flex-row lg:justify-between mx-auto py-10'>
            <div className='lg:w-[50%] w-full lg:mt-0 order-2 lg:order-1'>
                <h4 className='uppercase tracking-[3px] text-center lg:text-left text-[14px] text-[#c4cfde] mb-4'>Welcome to my world</h4>
                <h1 className='text-[35px] sm:text-[45px] md:text-[50px] lg:text-[55px] text-center lg:text-left xl:text-[60px] mb-4 leading-[50px] lg:leading-[65px] xl:leading-[75px] text-white font-bold'>
                Hi, I’m <span className='text-[#ff014f] '>Jone Lee</span>
                 <span className=''> a Developer.</span>
                </h1>
                <p className='text-[#c4cfde] text-center lg:text-left font-[Poppins] leading-[30px] pe-6'>
                I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
                </p>
                <div className='sm:mt-12 mt-10 md:mt-16 lg:mt-16 xl:mt-36 px-2 flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-start lg:gap-12 xl:gap-20 text-[#c4cfde]'>
                    <div>
                        <h6 className='mb-4 uppercase text-center lg:text-left text-[14px] tracking-[3px] '>find with me</h6>
                        <div className='flex gap-5 text-[20px]'>
                        <a href="" target='_blank' title='Facbook'>
                        <FiFacebook className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                        </a>
                        <a href="" target='_blank' title='Instagram'>
                        <FaInstagram className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                        </a>
                        <a href="" target='_blank' title='Linkedin'>
                        <FiLinkedin className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                        </a>
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-0'>
                        <h6 className='mb-4 uppercase text-center lg:text-left text-[14px] tracking-[3px] '>best skill on</h6>
                        <div className='flex gap-5 text-[20px]'>
                        <a href="" target='_blank' title='Figma Design'>
                        <FiFigma className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                        </a>
                        <a href="" target='_blank' title='Adobe Desgin'>
                        <SiAdobe className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                        </a>
                        <a href="" target='_blank' title='Web Desgin'>
                        <FaCode className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-[50%] w-[80%] mb-14 lg:mb-0 mt-0 order-1 lg:order-2 lg:relative lg:h-[75vh] xl:h-[90vh] lg:px-20 lg:py-10'>
                <div className='w-full lg:block hidden h-full shadow-3xl home-icon-btn'>
                </div>
                <img src={joneLee} className='lg:absolute bottom-0 lg:bottom-10 w-full lg:w-[65%] xl:w-[70%]' alt="" />
            </div>
        </div>
    );
}

export default HomeSection;
