import React, { useEffect, useState } from 'react';
import { Authcontaxt } from './Authcontaxt';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
        const [user ,setuser] = useState([])
    const [loading , setLoading] = useState(true)
    const Register = (email, pass) =>{
       return createUserWithEmailAndPassword(  auth, email, pass )
    }
    const Login = (email, pass) =>{
      return  signInWithEmailAndPassword(auth, email, pass)
    }
    const updateProfil = (updateData) =>{
        return updateProfile(auth.currentUser , updateData)
    }

    useEffect(() =>{
        const unsubscriber =  onAuthStateChanged(auth , currrentuser =>{
                setuser(currrentuser)
                setLoading(false)
            } )
            return()=>{
                    unsubscriber()
            }
    },[])
    const Logout = () =>{
      return  signOut(auth)
    }

    const userinfo = {
        user,
        loading,
        setLoading,
        setuser,
        Register,
        Logout,
        Login,
        updateProfil
    }
    return (
        <Authcontaxt value={userinfo} >
                {children}
        </Authcontaxt>
    )
};

export default AuthProvider;