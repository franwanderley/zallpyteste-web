import React, { useState } from 'react';
import { api } from '../services/api';
import { Button, Container, DivButton, DivForm } from '../styles/login';

export const ForgotPassword = () => {
   const [email, setEmail] = useState('');

   const handleSubmit = async f => {
      f.preventDefault();
      await api.post('auth/forgot-password', { email })
      .then(() => alert('Email Enviado com Sucesso!'))
      .catch(() => alert('Email não enviado!'));

   };

   return (
      <Container>
         <img src="./zallpylogo.png" alt="logo" />
         <DivForm>
            <h3>Recuperar Senha</h3>
            <form onSubmit={handleSubmit}>
               <div style={{display: 'flex', flexDirection: 'column'}}>
                  <label htmlFor="email">Informe seu e-mail e lhe enviaremos sua senha.</label>
                  <input 
                     type="email" 
                     value={email}
                     required={true}
                     onChange={({target}) => setEmail(target.value)}
                  />
               </div>
               <DivButton>
                  <Button type="submit">Enviar</Button>
               </DivButton>
            </form>
         </DivForm>
      </Container>
   );
};