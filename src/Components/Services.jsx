import React from 'react';
import yourImage1 from '../assets/image2.jpg';
import yourImage2 from '../assets/oil-field.jpg';

const Services = () => {
  return (
    <div className="bg-white py-3 md:py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-4 relative group">
        <div className="md:ml-4 relative">
          <img
            src={yourImage1}
            alt="Image 1"
            className="w-full h-auto transform hover:scale-90 transition-transform duration-500 hover:opacity-70 cursor-pointer "
          />
        </div>
      </div>
      <div className="bg-green-50 p-4">
        <div className="absolute">
          <h1 className="font-bold text-xl md:text-2xl transition-transform transform hover:scale-105">
            Company Overview
          </h1>
          <p className="font-normal pt-2 transition-opacity hover:opacity-50">
            Tana Petroleum is a dynamic and innovative player in the petroleum industry, specializing in the supply of outfield equipment, fuels, and renewable energy solutions. Established in 2013 by visionary entrepreneurs Achier Ayay Kon and Bol Korium, Tana Petroleum has rapidly grown into a reputable and reliable partner for businesses and industries seeking top-quality products and sustainable energy solutions.
          </p>
          <h1 className="font-bold pt-7 text-xl md:text-2xl transition-transform transform hover:scale-105">
            Our Mission
          </h1>
          <p className="font-normal pt-2 transition-opacity hover:opacity-50">
            At Tana Petroleum, our mission is to provide cutting-edge solutions to meet the diverse energy needs of our clients while prioritizing environmental responsibility, technological innovation, and customer satisfaction. We aim to be at the forefront of the energy sector, promoting cleaner and more efficient energy solutions for a brighter future.
          </p>
          <img
            src={yourImage2}
            alt="Image 2"
            className=" translate-y-6 pt-9 w-full h-[500px] transform hover:scale-90 transition-transform duration-500 hover:opacity-70 cursor-pointer bg-no-repeat bg-cover bg-center "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
