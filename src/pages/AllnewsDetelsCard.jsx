import React from 'react';
import { NavLink } from 'react-router';

const AllnewsDetelsCard = ({news}) => {
    console.log(news);
    
    return (
        <div className='space-y-3'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h1 className='text-xl font-semibold'>{news.title}</h1>
            <p>{news.details}</p>

            <NavLink to={`/catagory/${news.category_id}`} className='btn bg-blue-600 text-white rounded-2xl w-full mt-10 hover:bg-white hover:text-blue-600 hover:border-blue-600' >Go To Back</NavLink>

        </div>
    );
};

export default AllnewsDetelsCard;