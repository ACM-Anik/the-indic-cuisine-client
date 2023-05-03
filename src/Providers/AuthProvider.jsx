import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null); 
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleAuthProvider);
    }
    const signInWithGithub = () =>{
        return signInWithPopup(auth, githubAuthProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedInUser =>{
            setUser(loggedInUser);
            setLoading(false);
        });

        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
            user,
            loading,
            createUser,
            signIn,
            signInWithGoogle,
            signInWithGithub,
            logOut            
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;