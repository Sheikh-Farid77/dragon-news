import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const[user, setUser] = useState(null)

    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    }, [])
  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    logOut

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
