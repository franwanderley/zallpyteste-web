import React, { useContext } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Login } from './pages/Login';
import { Projects } from './pages/Projects';

export default function Routes(){
   const { user } = useContext(AuthContext);

   return (
       <BrowserRouter>
          <Switch>
               <Route path="/" component={Login} exact />
               {user ? (
                  <Route path="/projects" component={Projects}  exact />
               ): (
                  <Redirect to={{ pathname: '/' }} />
               )}
          </Switch>
       </BrowserRouter>
   );
}