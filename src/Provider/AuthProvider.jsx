import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true)

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout =()=>{
    setLoader(true)
    signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
    
      setUser(loggedUser);
      setLoader(false)
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    login,
    logout,
    loader
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
