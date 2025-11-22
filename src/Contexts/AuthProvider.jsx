import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const registerUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
      const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

    const authInfo={
      registerUser,
      signInUser,
      googleSignIn

    }
    return (
        <div>
            <AuthContext value={authInfo}>
              {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;