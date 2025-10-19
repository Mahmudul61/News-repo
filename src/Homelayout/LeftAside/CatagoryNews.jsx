import React, { use } from 'react';
import { NavLink } from 'react-router';
 const catagoryPromice = fetch('Catagory.json').then( res => res.json())
const CatagoryNews = () => {
   
    const catagorys = use(catagoryPromice)
    
    return (
        <div>
            <h1 className='text-center font-semibold' >All Catagory news : {catagorys.length} </h1>
            <div className='grid grid-cols-1 mt-5 gap-3' >
                {
                    catagorys.map( catagory => <NavLink to={`/catagory/${catagory.id}`} key={catagory.id} className={'btn hover:bg-gray-300'} > {catagory.name} </NavLink> )
                }
            </div>
        </div>
    );
};

export default CatagoryNews;