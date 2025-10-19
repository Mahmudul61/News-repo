// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from 'react';
import {  NavLink } from 'react-router';
import { Authcontaxt } from '../Authintications/Authcontaxt';
// import { auth } from "../firebase.init";

const Register = () => {
    const {Register, setuser, updateProfil} = use(Authcontaxt)
  const handelsubmit = (e) =>{
      e.preventDefault()
      const name = e.target.name.value;
      const url = e.target.url.value;
      const email= e.target.Email.value;
      const pass = e.target.pass.value

      console.log(name, url , email, pass);

      Register(email, pass).then( res =>{
        // console.log(res);
        
        
         updateProfil({displayName: name , photourl: url})
         .then(() =>{
          setuser({...res.user, displayName: name , photourl: url} )
         })
         .catch((error) =>{
          console.log(error);
          setuser(res.user)
         })
        
      }).catch(error =>{
        console.log(error);
        
      })
      
  }

    return (
        <div>
           <div className='flex justify-center min-h-screen items-center ' >
           
              
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                 <div className="card-body space-y-5">
                   <h1 className='text-2xl font-bold text-center' >Register In your Account</h1>
                   <form onSubmit={handelsubmit} className="form space-y-4">
           
                     <label className="label">Name</label>
                     <input type="text" name='name' className="input" placeholder="Name" />
                     <label className="label">Photo Url</label>
                     <input type="text" name='url' className="input" placeholder="URl" />
                     <label className="label">Email</label>
                     <input type="email" name='Email' className="input" placeholder="Email" />
                     <label className="label">Password</label>
                     <input type="password" name='pass' className="input" placeholder="Password" />
                     <div><a className="link link-hover">Forgot password?</a></div>
                               
                     <button className="btn btn-neutral w-full mt-4">Login</button>
                     <div className=' flex justify-center '> <p className='text-lg'>Already have an Account? <NavLink
                      to='/auth/login' className='text-red-500 underline'>Login</NavLink > </p>
           </div>
                   </form>
                 </div>
               </div>
             </div>
        </div>
    );
};

export default Register;