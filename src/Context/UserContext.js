import React, { createContext, useEffect, useState } from 'react';

import { app } from '../Firebase/Firebase.init.js';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from 'firebase/auth'
export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const handleGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const signout = () => {
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, signin, createUser, loading, signout, handleGoogleSignIn, handleGithubSignIn, updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;