import React from 'react';
import clss from '../../Image/class.png'
import swim from '../../Image/swimming.png'
import play from '../../Image/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold mb-5'>qzone</h1>
            <div className='space-y-7'>
                    <img src={play} alt="" />
                    <img src={swim} alt="" />
                    <img src={clss} alt="" />
                    
            </div>
        </div>
    );
};

export default Qzone;