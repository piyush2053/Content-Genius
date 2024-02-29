import React from 'react';
import { AiOutlineRobot } from 'react-icons/ai';
import { FaMousePointer } from "react-icons/fa";
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
          <span className="bg-[rgba(242,242,242,0.1)] text-[#fff] text-l font-semibold px-4 py-1 rounded-full border border-white">
            Content Genius is designed to empower users with the ability to effortlessly refine their sentences into captivating and polished content. With this innovative tool, users can input their sentences and corresponding content, and watch as Content Genius works its magic to generate the top three suggestions, ensuring correctness, coherence, and impact.
          </span>
        </div>
      </div>
      <div className='mx-5 p-8 mt-10 rounded-xl bg-[#161717]'>
        <div className="flex">
          <span className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-full flex border border-white">
            <FaMousePointer className="text-[#fff] text-1xl mr-1 mt-0.5" />
            Easy to Operate
          </span>
        </div>
        <h1 className="text-6xl font-bold mb-6">
          Piyush Patel
        </h1>
      </div>
    </div>
  );
}

export default AboutUs;
