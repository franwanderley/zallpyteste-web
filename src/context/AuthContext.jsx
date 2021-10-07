import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router';

export const AuthContext = createContext();

export function AuthProvider( children ){
   const history = useHistory();
   const [user, setUser] = useState();
   const [projectSelected, setProjectSelected] = useState();  

   async function signOut(){
      setUser(null);
      history.push('/');
   }

   return (
      <AuthContext.Provider value={{signOut, user, setUser, projectSelected, setProjectSelected}} >
         {children.children}
      </AuthContext.Provider>
   );
}