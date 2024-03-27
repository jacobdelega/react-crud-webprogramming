import React from 'react';

const Navbar = () => {
  return (
    <nav className="h-[100px] flex justify-between items-center bg-slate-700 border-white border-b-4">
      <div className="pl-12 block">  {/* Left side with padding */}
        <p className='text-4xl font-bold italic text-white'>Rowan Web</p>
        <p className="block text-xl font-thin text-white gap">P R O G R A M M I N G</p>
      </div>

      <div className="flex h-full gap-2 mr-64 justify-center items-center"> {/* Right side with margin */}
        <a href="/home" className='h-full  border-red-500 flex items-center text-xl px-4 font-normal hover:border-red-500 hover:border-t-2 hover:bg-slate-800 text-slate-300 hover:text-white hover:cursor-pointer'>HOME</a>
        <a href="/about" className="h-full border-red-500 flex items-center text-xl px-4 font-normal hover:border-red-500 hover:border-t-2 hover:bg-slate-800 text-slate-300 hover:text-white hover:cursor-pointer">ABOUT</a>
        <a href="/contact" className="h-full  border-red-500 flex items-center text-xl px-4 font-normal hover:border-red-500 hover:border-t-2 hover:bg-slate-800 text-slate-300 hover:text-white hover:cursor-pointer">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
