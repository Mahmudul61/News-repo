import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Findus = () => {
    return (
        <div className='mt-3 '>
            <h2 className='text-2xl font-semibold' >FInd Us</h2>
            <div>
                <div className="join join-vertical w-full">
  <button className="btn bg-base-100 join-item justify-start items-center hover:bg-blue-600 hover:text-white"> <FaFacebook size={20} ></FaFacebook> Facebook</button>
  <button className="btn bg-base-100 join-item justify-start items-center hover:bg-blue-600 hover:text-white"> <BsTwitterX size={20}></BsTwitterX> Twitter</button>
  <button className="btn bg-base-100 join-item justify-start items-center hover:bg-blue-600 hover:text-white"> <BsInstagram size={20}></BsInstagram> Instagram</button>
</div>
            </div>
        </div>
    );
};

export default Findus;