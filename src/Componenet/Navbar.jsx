import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { CgProfile } from "react-icons/cg";
import { Authcontaxt } from '../Authintications/Authcontaxt';
const Navbar = () => {
    const{user , Logout} = use(Authcontaxt)
    
    const logout = () =>{
        console.log("ber how");
        
        Logout().then( res=>{
            console.log(res);
            
        }).catch((error) =>{
            console.log(error);
            
        })
    }
    return (
        <div>
           <section className='flex justify-around'>
            <div>
                   <h1>{user?.email || " "}</h1>
            </div>
            <div className='flex justify-center gap-4'>
                <NavLink to='/' > Home</NavLink>
                <NavLink to='/' > About</NavLink>
                <NavLink to='/' > Center</NavLink>
            </div>
            <div className='flex justify-center items-center gap-3 ' >
                
               {
                user? user.photoURL :<CgProfile size={30} />
               }
               {
                user? <button onClick={logout}  className='btn p-5 bg-black text-white rounded' >Logout</button> :<NavLink to='/auth/login' >
                                <button
         className='btn p-5 bg-black text-white rounded'>Login</button>

               </NavLink>
               }
               
            </div>
           </section>
        </div>
    );
};

export default Navbar;


// import React from 'react';
// import { NavLink } from 'react-router-dom'; // 💥 react-router-dom ব্যবহার করতে হবে
// import { CgProfile } from "react-icons/cg";

// const Navbar = () => {
//     return (
//         <div>
//            <section className='flex justify-around'>
//             <div></div>
//             <div className='flex justify-center gap-4'>
//                 <NavLink to='/' >Home</NavLink>
//                 <NavLink to='/' >About</NavLink>
//                 <NavLink to='/' >Center</NavLink>
//             </div>
//             <div className='flex justify-center items-center gap-3'>
//                 <CgProfile size={30} />
//                 <NavLink to='/login'> {/* Login route path */}
//                     <button className='btn p-5 bg-black text-white rounded'>Login</button>
//                 </NavLink>
//             </div>
//            </section>
//         </div>
//     );
// };

// export default Navbar;
