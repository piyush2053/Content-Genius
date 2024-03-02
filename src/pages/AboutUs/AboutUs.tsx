import React from 'react';
import { AiOutlineRobot } from 'react-icons/ai';
import { IoPersonCircle } from "react-icons/io5";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import '../../index.css';

const AboutUs = () => {
  return (
    <div className="fade-in text-white py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-full flex border border-white">
            <AiOutlineRobot className="text-[#fff] text-1xl mr-1 mt-0.5" />
            Learn about us and what we're up to
          </span>
        </div>
        <h1 className="text-7xl font-bold mb-6">
          About Us
        </h1>
        <div className="flex items-center justify-center mb-8 px-2">
          <span className="bg-[rgba(242,242,242,0.1)] text-[#fff] text-l font-semibold px-4 py-1 rounded-lg border border-white">
            Content Genius is designed to empower users with the ability to effortlessly refine their sentences into captivating and polished content. With this innovative tool, users can input their sentences and corresponding content, and watch as Content Genius works its magic to generate the top three suggestions, ensuring correctness, coherence, and impact.
          </span>
        </div>
      </div>
      <div className='mx-5 p-8 mt-10 rounded-xl bg-[#161717]'>
        <div className="flex">
          <span className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-lg flex border border-white">
            <IoPersonCircle className="text-[#fff] text-1xl mr-1 mt-0.5" />
            Content Genius is designed for project purpose by
          </span>
        </div>
        <h1 className="text-6xl font-bold mb-4">
          Piyush Patel
        </h1>
        <div className='flex'>
          <img src='https://piyush2053.github.io/PortFolio/assets/images/me.jpeg' alt='piyush patel' className='rounded-full h-[150px]'></img>
          <div className='ml-10'>
            <div className='flex p-1 rounded-lg bg-[red] px-3 mb-1'><FaYoutube className='text-1xl mr-1 mt-1' /><h2>Youtube</h2></div>
            <div className='flex p-1 rounded-lg bg-[#0A66C2] px-3 mb-1'><FaLinkedin className='text-1xl mr-1 mt-1' /><h2>Linkedin</h2></div>
            <div className='flex p-1 rounded-lg bg-[#c71610] px-3 mb-1'><SiGmail className='text-1xl mr-1 mt-1' /><h2>Mail</h2></div>
            <div className='flex p-1 rounded-lg bg-[#E1306C] px-3 mb-1'><FaInstagram className='text-1xl mr-1 mt-1' /><h2>Instagram</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;