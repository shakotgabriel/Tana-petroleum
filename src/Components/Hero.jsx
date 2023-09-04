import React from 'react';
import yourImage1 from '../assets/image4.jpg';

const Hero = () => {
  return (
    <div className='h-[665px] bg-gradient-to-b from-green-100 to-green-50'>
      
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        <div className="text-center bg-gradient-to-b from-green-300 to-green-800 bg-clip-text text-transparent">
          <button className='border-none rounded'><h1 className="text-4xl font-bold mb-2 pl-4 pr-4 sm:text-4xl lg:text-4xl">Tana Petroleum</h1></button>
          <p className="text-2xl m-4 sm:text-xl lg:text-2xl">Fueling The Future with Energy Excellence</p>
          <p className='text-xl m-6 sm:text-xl lg:text-2xl'>
            Your Trusted Partner
          </p>
          <button className='pl-4 pr-4 rounded border-green-100 text-base sm:text-lg lg:text-xl'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
