import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../backend/Firebase/Firebase-config.js';

/* Creating a context object. */
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
  /* Creating a state object called user and a function called setUser. */
  const [user, setUser] = useState({});

/**
 * It creates a new GoogleAuthProvider object, and then uses the signInWithRedirect method to sign in
 * with that provider.
 */
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  };

/**
 * It takes the auth object from the Firebase library and passes it to the signOut function.
 */
  const logOut = () => {
      signOut(auth)
  }

 /* A hook that is used to listen for changes in the authentication state. */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

/* Returning the AuthContext.Provider component with the value of the googleSignIn, logOut, and user
functions. */
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * This function returns the value of the AuthContext object, which is the current user's
 * authentication state.
 * @returns The AuthContext object.
 */
export const UserAuth = () => {
  return useContext(AuthContext);
};