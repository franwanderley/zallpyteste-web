import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router';

export const AuthContext = createContext();

export function AuthProvider( {children, userStorage} ){
   const history = useHistory();
   const [user, setUser] = useState(userStorage);
   const [projectSelected, setProjectSelected] = useState();  

   async function signOut(){
      setUser(null);
      localStorage.removeItem('zallpyteste/user')
      history.push('/');
   }

   return (
      <AuthContext.Provider value={{signOut, user, setUser, projectSelected, setProjectSelected}} >
         {children}
      </AuthContext.Provider>
   );
}