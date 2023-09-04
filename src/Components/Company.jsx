import React from 'react';

const Company = () => {
  return (
    <div className='bg-white py-8 '>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8'>Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
          <div className='bg-green-50 shadow-md rounded p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out h-72'>
            <h2 className='text-xl font-semibold mb-2'>Oilfield Equipment</h2>
            <p className='text-gray-700'>
              We offer a comprehensive range of outfield equipment designed to meet the demanding requirements of petroleum exploration and production. From drilling rigs to storage tanks, our products are engineered for reliability and performance, ensuring operational efficiency and safety.
            </p>
          </div>
          <div className='bg-green-50 shadow-md rounded p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out h-72'>
            <h2 className='text-xl font-semibold mb-2'>Fuels</h2>
            <p className='text-gray-700'>
              Tana Petroleum is a trusted supplier of high-quality fuels, including gasoline, diesel, and petrol fuels. We understand the critical role that fuels play in various industries, and we are committed to delivering products that meet rigorous quality standards, ensuring smooth operations and optimal performance.
            </p>
          </div>
          <div className='bg-green-50 shadow-md rounded p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out h-72'>
            <h2 className='text-xl font-semibold mb-2'>Renewable Energy</h2>
            <p className='text-gray-700'>
              Tana Petroleum is a trusted supplier of high-quality fuels, including gasoline, diesel, and petrol fuels. We understand the critical role that fuels play in various industries, and we are committed to delivering products that meet rigorous quality standards, ensuring smooth operations and optimal performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
