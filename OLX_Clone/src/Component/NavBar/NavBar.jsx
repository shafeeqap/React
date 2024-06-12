import React from 'react';
import olx_logo from '../../assets/OLX-Symbol.png';
import { SlMagnifier, SlArrowDown  } from 'react-icons/sl';

export default function NavBar() {
  return (
    <div className='flex p-4 items-center'> 
        <img src={olx_logo} className='w-11 h-9' alt="OLX Logo" />
        <div className='flex border border-spacing-1 w-64 p-2 border-black ml-5'>
            <SlMagnifier className='w-6 h-5 mt-1'/>
            <input type="text" placeholder='Location' />
            <SlArrowDown className='w-8 h-7'/>
        </div>
    </div>
  );
}
