import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router';

export const AuthContext = createContext();

export function AuthProvider( children ){
   const [user, setUser] = useState();
   const history = useHistory();

   async function signOut(){
      setUser(null);
      history.push('/');
   }

   return (
      <AuthContext.Provider value={{signOut, user, setUser}} >
         {children.children}
      </AuthContext.Provider>
   );
}