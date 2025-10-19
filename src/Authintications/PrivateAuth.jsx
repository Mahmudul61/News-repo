import React, { use } from 'react';
import { Authcontaxt } from './Authcontaxt';
import { Navigate, useLocation } from 'react-router';

const PrivateAuth = ({children}) => {
    const {user , loading} = use(Authcontaxt)
    // console.log(user);
    const location = useLocation()
    console.log(location);
    
    if(loading){ 
        return <p><span className="loading loading-bars loading-xl"></span> </p>
    }
    
    if(user && user?.email){
        return children
    }
    return <Navigate to='/auth/login' ></Navigate>
    
};

export default PrivateAuth;