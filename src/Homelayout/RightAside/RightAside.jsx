import React from 'react';
import SOcalIcon from './SOcalIcon';
import Findus from './Findus';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-3'>
            <SOcalIcon></SOcalIcon>
            <Findus></Findus>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;