import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-8 md:mt-24 bg-green-50 text-green-800 py-4 px-2'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b-2 border-green-50 py-8 px-4 cursor-pointer'>

        <div>
          <h6 className='font-bold uppercase pt-2'>Support</h6>
          <ul>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Documentation</li>
            <li className='py-1'>Inquiry</li>
            <li className='py-1'>Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Company</h6>
          <ul>
            <li className='py-1'>About</li>
            <li className='py-1'>Jobs</li>
            <li className='py-1'>Press</li>
            <li className='py-1'>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Legal</h6>
          <ul>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Policies</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 py-4 md:py-8'>
          <p className='font-bold uppercase'>Contacts</p>
          <p className='py-2'>+211 924 491 398</p>
          <p>Juba</p>
          <p>South Sudan</p>
          <div className='flex flex-col md:flex-row'>
            <button className='mb-2 md:mb-0 rounded'>Achier.ayay@tanapetroleum.com</button>
            <button className='mb-2 md:mb-0 rounded'>Info@tanapetroleum.com</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col max-w-screen-xl mx-auto justify-between sm:flex-row text-center text-gray-500 py-4'>
        <p className='py-2'>2023 Experiences, LLC. All rights reserved</p>
        <div className='flex justify-center sm:justify-end w-full sm:w-auto py-4 text-2xl'>
          <FaFacebook className='mx-2' />
          <FaInstagram className='mx-2' />
          <FaTwitter className='mx-2' />
          <TiSocialPinterest className='mx-2' size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
