import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { api } from '../services/api';
import { BtnClose, Container, Form, Overlay } from '../styles/modal';

export function Modal({setIsOpenModal}){
   const { projectSelected, user  } = useContext(AuthContext);
   const [date, setDate] = useState();
   const [hours, setHours] = useState();


   async function handleSubmit(f){
      f.preventDefault();
      const yeah = Number(date?.split('-')[0]);
      const month = Number(date?.split('-')[1]);
      const day = Number(date?.split('-')[2]);
      const dateFormat = format(new Date(yeah, month, day), 'dd/MM/yyyy');
      console.log([dateFormat, hours]);
      const data = {
         date : dateFormat,
         hours,
         user: { id: user.id },
         project: { id: projectSelected.id }
      };
      await api({
         method: 'POST',
         url: 'hours',
         data,
         headers: {
            "authorization": user?.token,
         }
      });      

    setIsOpenModal(false);
   }

   return (
      <Overlay>
         <Container>
            <BtnClose onClick={() => setIsOpenModal(false)}>x</BtnClose>
            <h3>Apontar Horas</h3>
            <Form>
               <form onSubmit={handleSubmit}>
                  <div>
                     <label htmlFor="funcionario">Funcionario: </label>
                     <input type="text" disabled id="funcionario" value={user?.username} />
                  </div>
                  <div>
                     <label htmlFor="projeto">Projeto: </label>
                     <input type="text" disabled id="projeto" value={projectSelected?.name}/>
                  </div>
                  <div style={{flexDirection: 'row', gap: 15}}>
                     <div>
                        <label htmlFor="data">Data: </label>
                        <input 
                           type="date" 
                           id="data"
                           onChange={e => setDate(e.target.value)} 
                           required
                        />
                     </div>
                     <div>
                        <label htmlFor="horas">Horas: </label>
                        <input 
                           type="number" 
                           id="horas" 
                           required
                           onChange={e => setHours(e.target?.value)} 
                           min={0} 
                        />
                     </div>
                  </div>
                  <button type="submit"> Salvar </button>
               </form>
            </Form>
         </Container>
      </Overlay>
   );
}