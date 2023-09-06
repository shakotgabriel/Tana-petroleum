import React from 'react';

const Navbar = () => {
  return (
    <div className="relative w-full flex justify-between items-center bg-opacity-90 bg-zinc-950 p-4 font-black italic">

      
      <button href="/" className='rounded'>
        
        <h1 className="text-2xl ml-6 mr-6 font-bold cursor-pointer text-green-50">Tana Petroleum</h1>
      </button>

      <ul className='flex space-x-4'>
        <li className='text-xl font-medium'>
          <a href="/" className='rounded border-black p-2  text-green-50'>Home</a>
        </li>
        <li className='text-xl font-medium'>
          <a href="/Services" className='rounded border-black p-2  text-green-50'>Services</a>
        </li>
        <li className='text-xl font-medium'>
          <a href="/Team" className='rounded border-black p-2  text-green-50'>Team</a>
        </li>
        <li className='text-xl font-medium'>
          <a href="/Contacts" className='rounded border-black p-2  text-green-50'>Contacts</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
