import React from 'react';
import { Button, Container, Form } from '../styles/login';

export function Login(){
   return (
      <Container>
         <img src="./zallpylogo.png" alt="logo" />
         <Form>
            <h3>Entrar</h3>
            <form>
               <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email"/>
               </div>
               <div>
                  <label htmlFor="senha">Senha:</label>
                  <input type="password"/>
               </div>
               <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button type="submit">Entrar</Button>
               </div>
            </form>
         </Form>
      </Container>
   );
}