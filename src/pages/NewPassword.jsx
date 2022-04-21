import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { api } from '../services/api';
import { Container, Button, DivButton, DivForm } from '../styles/login';
 
export const NewPassword = () => {
   const history = useHistory();
   let { token } = useParams()
   const [password, setPassword] = useState();
   const [passwordTwo, setPasswordTwo] = useState();

   const handleSubmit = async f => {
      f.preventDefault();
      if(password.lenght < 8 || password !== passwordTwo) return;

      await api.post(`auth/new-password/${token}`, { password })
      .then(() => history.push('/'))
      .catch(() => alert(('Não foi possivel salvar a nova senha!')));
   };

   return (
      <Container>
         <img src="../../zallpylogo.png" alt="logo" />
         <DivForm>
            <h3>Nova Senha</h3>
            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="password">Senha</label>
                  <input 
                     type="password" 
                     value={password}
                     required={true}
                     onChange={({target}) => setPassword(target.value)}
                  />

               </div>
               <div>
                  <label htmlFor="password">Repita a Senha</label>
                  <input 
                     type="password" 
                     value={passwordTwo}
                     required={true}
                     onChange={({target}) => setPasswordTwo(target.value)}
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