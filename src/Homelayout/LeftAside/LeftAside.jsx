import React, { Suspense } from 'react';
import CatagoryNews from './CatagoryNews';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>} >
                      <CatagoryNews></CatagoryNews>
            </Suspense>
        
        </div>
    );
};

export default LeftAside;