// import { da } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CatagoryAllNewsShjow = () => {
    const {id} = useParams()
    const lodar = useLoaderData()
    console.log(lodar);
    
    const [catagorydata , setCatagorydata] = useState([])
    useEffect(()=>{

        if(id == "0"){
            setCatagorydata(lodar)
            return;
        }
        else if(id == "1"){
            const data = lodar.filter( news => news.others.is_today_pick == true )
            // console.log(data);
            setCatagorydata(data)
        }

        else{
             const data = lodar.filter( news => news.category_id == id )
            console.log(data);
            setCatagorydata(data);
        }
           
            
    },[id ,lodar])
    // console.log(id  );
    
    return (
        <div>
            <h1> data found {catagorydata.length} </h1>
            <div className='grid grid-cols-1 gap-3 p-5' >
                {
                    catagorydata.map( news => <NewsCard key={news.id}  news={news} >  </NewsCard>  )
                }
            </div>
        </div>
    );
};

export default CatagoryAllNewsShjow;
