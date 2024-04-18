import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';

import app from '../firebase/firebase';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        setLoading(true)
           return signInWithEmailAndPassword(auth ,email,password)
    }
   const updateUser =(name,image)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:image,
    })

   }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
   
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
       console.log('userin the auth state change ',currentUser)
       setUser(currentUser)
       setLoading(false)
        })
        return()=>{
            return unSubscribe()
        }
    },[auth])
    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        updateUser,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
    
};

export default AuthProvider;