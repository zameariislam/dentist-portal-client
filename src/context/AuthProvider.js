import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')


    useEffect(() => {
      const unsubscribe= onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)

           
               return  ()=> unsubscribe()


        })

    }, [])






    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }





    const authInfo = {
        createUser,
        signIn,
        user

    }




    return (

        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

