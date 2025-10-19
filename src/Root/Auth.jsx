import React from 'react';
import Navbar from '../Componenet/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='min-h-screen bg-base-200 p-5'>
            <header>
     <Navbar></Navbar>
            </header>
       
            <main className='w-11/12 mx-auto p-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Auth;