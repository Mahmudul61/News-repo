import React, { useEffect, useState } from 'react';
import Header from '../Componenet/header';
import RightAside from '../Homelayout/RightAside/RightAside';
import AllnewsDetelsCard from './AllnewsDetelsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDeels = () => {
    const data = useLoaderData()
    // console.log(data);
    const {id} = useParams()
    // console.log(id );
    const [news , setnews] =useState([])
    
    useEffect(() =>{
            const oneNews = data.find( singlenews => singlenews.id == id )
            setnews(oneNews)
    },[data , id ])
    
    return (
        <div>
        <header>
            <Header></Header>
        </header>
        <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 ' >
            <section className='col-span-9'>
                <h1 className='font-bold text-3xl' >News details </h1>
                <AllnewsDetelsCard news={news} ></AllnewsDetelsCard>
            </section>
            <aside className='col-span-3 '>
            <RightAside></RightAside>
            </aside>
        </main>
        </div>
    );
};

export default NewsDeels;