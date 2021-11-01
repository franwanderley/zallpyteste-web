import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { api } from '../services/api';
import { Button, Container, Form } from '../styles/login';

export function Login(){
   const history = useHistory();
   const { setUser } = useContext(AuthContext);
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   async function handleSubmit(f){
      f.preventDefault();

      const data = { email, password };
      await api.post('/login', data)
      .then(res => {
         if(res.headers.authorization){
            setUser({
               token: res.headers.authorization,
               username: email,
               id: Number(res.headers.id)
            });
            localStorage.setItem('zallpyteste/user', JSON.stringify({
               id: Number(res.headers.id),
               username: email,
               token: res.headers.authorization,
            }));
            history.push('projects');
         }
      })
      .catch(() => alert('Email / Senha invalidos'));
   }

   return (
      <Container>
         <img src="./zallpylogo.png" alt="logo" />
         <Form>
            <h3>Entrar</h3>
            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="email">Email:</label>
                  <input 
                     type="email" 
                     value={email} 
                     onChange={({target}) => setEmail(target.value)}
                  />
               </div>
               <div>
                  <label htmlFor="senha">Senha:</label>
                  <input 
                     type="password"
                     value={password} 
                     onChange={({target}) => setPassword(target.value)}
                  />
               </div>
               <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button type="submit">Entrar</Button>
               </div>
            </form>
         </Form>
      </Container>
   );
}