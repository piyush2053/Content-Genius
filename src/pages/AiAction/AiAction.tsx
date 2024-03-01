import React, { useRef } from 'react';
import { FaMagic } from "react-icons/fa";
import '../../index.css';

const AiAction = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    const inputValue = inputRef.current.value;
    alert("You clicked the button! Text entered: " + inputValue);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  }

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
      <div className='mx-5 p-1 mt-10 rounded-xl bg-[#141414] flex h-[100px]'>
        {/* Add ref to the input */}
        <input ref={inputRef} type='text' className='flex-grow bg-transparent rounded border border-none p-7' placeholder='Try Something' onKeyDown={handleKeyPress}></input>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-5">
        <button className='bg-[#fff] flex text-[#8c8c8c] text-[20px] font-semibold px-4 py-1 rounded-full border border-white transition-all duration-300 hover:bg-transparent hover:text-[#fff] hover:animate-pulse' onClick={handleButtonClick}>
          Magic <FaMagic className='ml-2 mt-1' />
        </button>
      </div>
    </div>
  );
}

export default AiAction;
