import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`relative w-full flex flex-col md:flex-row justify-between items-center  bg-black p-4 font-black italic ${collapsed ? 'md:flex-col' : ''}`}>
      <button onClick={toggleNavbar} className='rounded md:hidden'>
        {collapsed ? <FaBars /> : <FaTimes />}
      </button>

      <h1 className="text-2xl ml-6 mr-6 font-bold cursor-pointer text-green-50 hover:text-green-600">Tana Petroleum</h1>

      <ul className={`flex ${collapsed ? 'flex-col md:flex-row' : ''} space-x-4 md:space-x-8 md:ml-auto`}>
        <li className='text-xl font-medium'>
          <a href="/" className='rounded border-black p-2  text-green-50 hover:text-green-600'>Home</a>
        </li>
        <li className='text-xl font-medium'>
          <a href="/Services" className='rounded border-black p-2  text-green-50 hover:text-green-600'>Services</a>
        </li>
        <li className='text-xl font-medium'>
          <a href="/Team" className='rounded border-black p-2  text-green-50 hover:text-green-600'>Team</a>
        </li>
        <li className='text-xl font-medium'>
          <a href="/Contacts" className='rounded border-black p-2  text-green-50 hover:text-green-600'>Contacts</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
