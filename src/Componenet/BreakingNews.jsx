import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex items-center gap-3 bg-gray-200 p-3'>
            <p className='text-2xl bg-[#D72050] text-white px-3 py-3' >News</p>
       
          
          <Marquee pauseOnHover={true} >
                 <p className='font-semibold'>The African Union (AU) has called for an end to a widely used map that shrinks the African continent. The map is called the Mercator projection. It was created by mapmaker Gerardus Mercator in 1569. In the 18th century, it became the international standard for sailors</p>
          </Marquee>
        </div>
    );
};

export default BreakingNews;