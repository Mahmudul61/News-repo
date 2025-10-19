import React, { use } from 'react';
import { NavLink } from 'react-router';
import { Authcontaxt } from '../Authintications/Authcontaxt';

const LogIn = () => {
  const {Login} = use(Authcontaxt)
  const logins = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(email, pass);
    
    Login(email,pass).than(res =>{
        console.log(res);
        
    }).catch((error) =>{
      alert("Please write in your email",error)
      
    })

  }
    return (
        <div className='flex justify-center min-h-screen items-center ' >

   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body space-y-5">
        <h1 className='text-2xl font-bold text-center' >Login your Account</h1>
        <form onSubmit={logins} className="form space-y-4">

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='pass' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
                    
          <button className="btn btn-neutral w-full mt-4">Login</button>
          <div className=' flex justify-center '> <p className='text-lg'>Dont have an Account? <NavLink to='/auth/Register' className='text-red-500 underline'>Register</NavLink  > </p>
</div>
        </form>
      </div>
    </div>
  </div>

    );
};

export default LogIn;