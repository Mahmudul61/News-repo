import React from 'react';

import { Outlet } from 'react-router';
import Header from '../Componenet/header';
import BreakingNews from '../Componenet/BreakingNews';
import Navbar from '../Componenet/Navbar';
import LeftAside from '../Homelayout/LeftAside/LeftAside';
import RightAside from '../Homelayout/RightAside/RightAside';

const Root = () => {
    return (
        <div>
           <header>
            
            <Header></Header>
            <section className='w-11/12 mx-auto my-4'>
                <BreakingNews></BreakingNews>
            </section>
            <section className='w-11/12 mx-auto my-4' >
            <Navbar>  </Navbar>
            </section>
            </header> 
            <main className='w-11/12 mx-auto my-5  grid grid-cols-12 gap-3 ' >
                    <aside className='col-span-3 '> 
                        <LeftAside></LeftAside>
                    </aside>
            <section className='col-span-6' >
                    <Outlet>

                    </Outlet>
            </section>
               <aside className='col-span-3' >
                 <RightAside></RightAside>
               </aside>
            </main>           
          <footer>
        
        </footer>  
        </div>
    );
};

export default Root;