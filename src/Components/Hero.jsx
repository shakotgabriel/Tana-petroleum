import React from 'react';
import yourImage1 from '../assets/image4.jpg';

const Hero = () => {
  return (
    <div className='h-[665px] bg-gradient-to-b from-green-200 to-white relative'>
      <img
        src={yourImage1}
        alt="Image 2"
        className="w-full h-[100%] object-cover object-center bg-no-repeat "
      />

      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center font-black leading-3'>
        <div className="text-center bg-gradient-to-b from-white to-green-400 bg-clip-text text-transparent">
          <button className='border-none rounded'>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 pl-4 pr-4 hover:text-green-600 hover:animate-bounce">
              Tana Petroleum
            </h1>
          </button>
          <p className="text-2xl sm:text-xl lg:text-2xl m-4">
            Fueling The Future with Energy Excellence
          </p>
          <p className='text-xl sm:text-lg lg:text-2xl m-6'>
            Your Trusted Partner
          </p>
          <button className='pl-4 pr-4 rounded border-green-100 text-base sm:text-lg lg:text-xl'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
