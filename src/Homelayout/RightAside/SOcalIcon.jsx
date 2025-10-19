import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SOcalIcon = () => {
    return (
        <div className='space-y-3'>
          <h1  className='text-xl font-semibold text-center' >Login with</h1>
          <div className=' flex flex-col gap-3'>
            <button className="btn btn-dash btn-secondary"> <FaGoogle />
 Login with Google</button>
              <button className="btn btn-neutral btn-outline"><FaGithub />
 Login With Github</button>
          </div>
        </div>
    );
};

export default SOcalIcon;