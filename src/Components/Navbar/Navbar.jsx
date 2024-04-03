import React from 'react';
import navlogo from "../../assets/nav-logo.svg";
import navprofile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className='flex  justify-around w-full p-5 items-center bg-white shadow-md '>
      <img className='max-w-30 md:max-w-40 h-auto' src={navlogo} alt="Logo" />
      <img className='max-w-10 md:max-w-32 h-auto' src={navprofile} alt="Profile" />
    </div>
  );
}

export default Navbar;
