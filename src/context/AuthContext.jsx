import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';

export const AuthContext = createContext();

export function AuthProvider( {children, userStorage} ){
   const history = useHistory();
   const [user, setUser] = useState(userStorage);
   const [projectSelected, setProjectSelected] = useState();

   useEffect(() => {
      localStorage.setItem('zallpyteste/user', JSON.stringify(user));
   }, [user]);

   async function signOut(){
      setUser(null);
      history.push('/');
   }

   return (
      <AuthContext.Provider value={{signOut, user, setUser, projectSelected, setProjectSelected}} >
         {children}
      </AuthContext.Provider>
   );
}