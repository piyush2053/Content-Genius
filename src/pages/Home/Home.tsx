import React from 'react';
import { AiOutlineRobot } from 'react-icons/ai';
import { FaArrowRight, FaMousePointer } from "react-icons/fa";
import '../../index.css';
import { FcAbout } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie'
import animationData from './animation/cat.json'

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="fade-in text-white py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-full flex border border-white">
            <AiOutlineRobot className="text-[#fff] text-1xl mr-1 mt-0.5" />
            AI based Content Suggestions
          </span>
        </div>
        <h1 className="text-7xl font-bold mb-6">
          Content Genius
        </h1>
        <div className="flex items-center justify-center mb-8 px-2">
          <span className="bg-[rgba(242,242,242,0.1)] text-[#fff] text-l font-semibold px-4 py-1 rounded-lg flex border border-white">
            Content Genius is designed to empower users with the ability to effortlessly refine their sentences into captivating and polished content. With this innovative tool, users can input their sentences and corresponding content, and watch as Content Genius works its magic to generate the top three suggestions, ensuring correctness, coherence, and impact.
          </span>
        </div>
        <Link to='/aiAction'className='bg-[#fff] flex text-[#8c8c8c] text-[20px] font-semibold px-4 py-1 rounded-full border border-white transition-all duration-300 hover:bg-transparent hover:text-[#fff] hover:animate-pulse'>
          Get Started <FaArrowRight className='ml-2 mt-1' />
        </Link>
      </div>
      <div className='mx-5 p-8 mt-10 rounded-xl bg-[#161717]'>
        <div className='flex justify-between'>
          <div className="flex">
            <span className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-full flex border border-white">
              <FaMousePointer className="text-[#fff] text-1xl mr-1 mt-0.5" />
              Easy to Operate
            </span>
          </div>
          <div className="flex">
            <Link to='/about' className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-full flex border border-white hover:bg-white hover:text-[black] transition-all duration-300">
              <FcAbout className="text-[#fff] text-1xl mr-1 mt-0.5" />
              About Us
            </Link>
          </div>
        </div>
        <div className='flex'>
          <h1 className="text-6xl font-bold mb-6">
            How to Get Started ?
          </h1>
          <div className='flex justify-end'>
              <Lottie
                options={defaultOptions}
                height={80}
                width={80}
              />
          </div>
        </div>
        <div className='flex'>
          <img src="/h1.png" alt="Get Started" className="h-[100px] rounded-lg " />
          <span className="text-[#fff] text-l font-semibold px-4 py-1 flex w-[50vw]">
            Click on Get started and you will land on content suggestions page then get started on your creative journey with our innovative AI-powered content generator, and watch as your ideas flourish effortlessly
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
