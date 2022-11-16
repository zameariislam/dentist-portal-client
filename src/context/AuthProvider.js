import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [loading,setLoading]=useState(true)

    const [user, setUser] = useState('')


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)


            return () => unsubscribe()
           


        })

    }, [])






    const createUser = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)

    }





    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        loading

    }




    return (

        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

