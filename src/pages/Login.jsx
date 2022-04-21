import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { api } from '../services/api';
import { Button, Container, DivForm, DivButton } from '../styles/login';

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
            history.push('projects');
         }
      })
      .catch(() => alert('Email / Senha invalidos'));
   }

   return (
      <Container>
         <img src="./zallpylogo.png" alt="logo" />
         <DivForm>
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
               <DivButton>
                  <Button type="submit">Entrar</Button>
                  <Link to="esqueceu-senha">Esqueçeu a Senha?</Link>
               </DivButton>
            </form>
         </DivForm>
      </Container>
   );
}