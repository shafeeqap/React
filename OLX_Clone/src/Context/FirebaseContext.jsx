
import React, { createContext } from 'react';
import { firebase, auth, googleProvider, firestore } from "../Firbase/firebse";


export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  
  return (
    <FirebaseContext.Provider value={{ auth, firestore, googleProvider, firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};
