import React from 'react';

const Navbar = () => {
  return (
    <nav className="relative w-full flex justify-between items-center  bg-green-100 p-4">
      <button href="/" className='rounded'>
        <h1 className="text-2xl ml-6 mr-6 font-bold cursor-pointer text-green-700">Tana Petroleum</h1>
      </button>

      <ul className='flex space-x-4'>
        <li className='text-xl font-medium'>
          <a href="/" className='rounded border-black p-2  text-green-700'>Home</a>
        </li>
        <li className='text-xl font-medium'>
          <a href="/Services" className='rounded border-black p-2  text-green-700'>Services</a>
        </li>
        <li className='text-xl font-medium'>
          <a href="/Team" className='rounded border-black p-2  text-green-700'>Team</a>
        </li>
        <li className='text-xl font-medium'>
          <a href="/Contacts" className='rounded border-black p-2  text-green-700'>Contacts</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
