import React from 'react';
import { FaMagic,FaMousePointer } from "react-icons/fa";
import '../../index.css';

const AiAction = () => {
  return (
    <div className="fade-in text-white py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-full flex border border-white">
          <FaMagic className="text-[#fff] text-1xl mr-1 mt-0.5" />
            Step inside the box where the magic of content creation unfolds
          </span>
        </div>
        <h1 className="text-7xl font-bold mb-6">
          Content Suggestions
        </h1>
      </div>
      <div className='mx-5 p-1 mt-10 rounded-xl bg-[#141414]'>
        <input type='text' className='bg-transparent rounded border border-none w-full h-full'></input>
      </div>
    </div>
  );
}

export default AiAction;
