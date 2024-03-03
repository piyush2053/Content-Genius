import React, { useRef, useState } from 'react';
import { FaMagic } from "react-icons/fa";
import { Card, CardContent, Typography } from '@mui/material';
import '../../index.css';
import Lottie from 'react-lottie'
import animationData from './loader/loder.json'
import animationDataPopper from './loader/poppers.json'
import animationDataWarning from './loader/warning.json'

const AiAction = () => {
  const inputRef = useRef(null);
  const [definitions, setDefinitions] = useState<{ word: string, definition: string, example: string }[]>([]);
  const [loading, setloading] = useState(false);
  const [poppers, setPoppers] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleButtonClick = () => {
    setloading(true)
    const inputValue = inputRef.current.value;
    const queryParams = `?term=${encodeURIComponent(inputValue)}`;
    const headers = {
      'X-RapidAPI-Key': 'f44f0eb869msh9cfe82dc6116de7p1c6861jsne92874139af1',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
      'Content-Type': 'application/json'
    };
    fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define${queryParams}`, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => {
        setPoppers(true)
        setloading(false)
        setTimeout(() => {
          setDefinitions(data.list);
        }, 1000)
        setTimeout(() => {
          setPoppers(false)
        }, 3000)
      })
      .catch(error => {
        setPoppers(false)
        setloading(false)
        console.error('Error:', error);
      });
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setWarning(false)
      handleButtonClick();
    } else {
      const trimmedValue = inputRef.current.value.trim();
      if (trimmedValue.includes(' ') && event.key !== 'Backspace' && event.key !== 'Shift' && event.key !== 'ArrowLeft' && event.key !== 'Control' && !(event.ctrlKey && event.key === 'a')) {
        setWarning(true)
        event.preventDefault();
      } else {
        setWarning(false)
      }
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptionsWarning = {
    loop: true,
    autoplay: true,
    animationData: animationDataWarning,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const popperOptions = {
    loop: false,
    autoplay: true,
    animationData: animationDataPopper,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="fade-in text-white py-16 px-4 md:px-0 h-screen">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-full flex border border-white">
            <FaMagic className="text-[#fff] text-1xl mr-1 mt-0.5" />
            Step inside the box where the magic of content creation unfolds
          </span>
        </div>
        <h1 className="text-7xl font-bold mb-6">
          Content Dictionary
        </h1>
      </div>
      <div className={`mx-5 p-1 mt-10 rounded-xl bg-[#141414] ${warning ? 'h-[120px]' : 'h-[100px]'}`}>
        <input ref={inputRef} type='text' className='flex-grow bg-transparent rounded border border-none p-7' placeholder='Give me a Word Please ' onKeyDown={handleKeyPress}></input>
        {warning ? <div className='fade in flex ml-3'><Typography className='fade in inverseColor text-bold' >Single Word Please</Typography></div> : null}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-5">
        {loading
          ?
          <div> <Lottie
            options={defaultOptions}
            height={50}
            width={50}
          /></div>
          :
          <>{warning ? <div className='fade in flex justify-end'><Lottie
            options={defaultOptionsWarning}
            height={60}
            width={60}
          /></div> : <button className='fade in bg-[#fff] flex text-[#8c8c8c] text-[20px] font-semibold px-4 py-1 rounded-full border border-white transition-all duration-300 hover:bg-transparent hover:text-[#fff] hover:animate-pulse' onClick={handleButtonClick}>
            Magic <FaMagic className='ml-2 mt-1' />
          </button>}</>
        }
      </div>
      <div className="fade-in max-w-7xl mx-auto mt-5 px-7" style={{ position: "relative" }}>
        <div className="poppers" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          {poppers ? <Lottie
            options={popperOptions}
            height={500}
            width={500}
          /> : null}
        </div>
        <div className="poppers" style={{ position: 'absolute', top: 0, left: '0', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          {poppers ? <Lottie
            options={popperOptions}
            height={500}
            width={500}
          /> : null}
        </div>
        <div className="poppers" style={{ position: 'absolute', top: 0, left: '100%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          {poppers ? <Lottie
            options={popperOptions}
            height={500}
            width={500}
          /> : null}
        </div>
        {definitions.map((definition, index) => (
          <Card key={index} className="mt-3 rounded-full" sx={{ borderRadius: "20px", backgroundColor: "#1E1E1E" }}>
            <CardContent >
              <Typography variant="h5" component="div" className='text-[#757575]'>
                {definition.word}
              </Typography>
              <Typography sx={{ mb: 1.5 }} className='text-[#757575]'>
                {definition.definition}
              </Typography>
              <div className='py-2 pl-2 bg-[#616161] rounded-lg'>
                <Typography variant="body2" className='text-[#E0E0E0]'>
                  Example: {definition.example}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AiAction;
