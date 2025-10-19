import React from 'react';
import logo from '../Image/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-10'>
            <img src={logo} alt="" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{format(new Date()," EEEE , MMMM MM , yyyy " )}</p>
        </div>
    );
};

export default Header;