import React from 'react';
import { FaCode, FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiFigma, FiLinkedin } from 'react-icons/fi';
import { SiAdobe } from 'react-icons/si';
import "./style.css";
const HomeSection = () => {
    return (
        <div className='w-[80%] flex justify-between mx-auto py-10 border'>
            <div className='w-[50%]'>
                <h2 className='uppercase tracking-[3px] text-[14px] text-[#c4cfde] mb-4'>Welcome to my world</h2>
                <h1 className='text-[60px] mb-4 leading-[75px] text-white font-bold'>
                Hi, I’m <span className='text-[#ff014f] '>Jone Lee</span>
                 <span className=''> a Developer.</span>
                </h1>
                <p className='text-[#c4cfde] font-[Poppins] pe-8'>
                I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
                </p>
                <div className=' mt-40 px-2 flex justify-start gap-20 text-[#c4cfde]'>
                    <div>
                        <h6 className='mb-4 uppercase text-[14px]tracking-[3px] '>find with me</h6>
                        <div className='flex gap-5 text-[20px]'>
                            <FiFacebook className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5' />
                            <FaInstagram className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                            <FiLinkedin className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5' />
                        </div>
                    </div>
                    <div>
                        <h6 className='mb-4 uppercase text-[14px]tracking-[3px] '>best skill on</h6>
                        <div className='flex gap-5 text-[20px]'>
                        <FiFigma className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                        <SiAdobe className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                        <FaCode className='w-[60px]  rounded-lg cursor-pointer  home-icon-btn duration-[400]  h-[60px] p-5'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[50%] h-[90vh] border px-20 py-10'>
                <div className='w-full h-full shadow-2xl home-icon-btn'>

                </div>
            </div>
        </div>
    );
}

export default HomeSection;
