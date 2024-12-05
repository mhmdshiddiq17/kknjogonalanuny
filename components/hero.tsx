import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
// import Typed from 'react-typed';

const Hero = () => {
  return (
      
      <div className='max-w-[800px] mt-[-96px] w-full min-h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          KKN JOGONALAN UNY 2024
        </p>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Sistem Informasi dan Pencatatan Warga Desa Jogonalan
          </p>
          {/* <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        
        <p className='md:text-2xl text-xl font-bold text-gray-500 flex items-center justify-center gap-x-2'><FaLocationDot /> Jogonalan Kidul, Tirtonirmolo, Kasihan, Bantul</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
  );
};

export default Hero;