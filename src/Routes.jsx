import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Projects } from './pages/Projects';

export default function Routes(){
   return (
       <BrowserRouter>
          <Switch>
               <Route path="/" component={Login} exact={true}/>
               <Route path="/projects" component={Projects} exact={true} />              
          </Switch>
       </BrowserRouter>
   );
}