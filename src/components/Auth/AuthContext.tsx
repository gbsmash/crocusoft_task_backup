import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isSignedIn: boolean;
  signIn: () => void;
};

const AuthContext = createContext<AuthContextType>({isSignedIn: false, signIn: () => {}});

export const useAuth = () => useContext(AuthContext);


export const AuthProvider: React.FC<{children: any}> = ({ children }) => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => setIsSignedIn(true);

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
