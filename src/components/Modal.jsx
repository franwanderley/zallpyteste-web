import React from 'react';
import { BtnClose, Container, Form, Overlay } from '../styles/modal';

export function Modal(){
   return (
      <Overlay>
         <Container>
            <BtnClose>X</BtnClose>
            <h3>Apontar Horas</h3>
            <Form>
               <form >
                  <div>
                  <label htmlFor="">Funcionario: </label>
                  <input type="text" disabled id="funcionario" value="Francisco Wanderley" />
                  </div>
                  <div>
                     <label htmlFor="projeto">Projeto: </label>
                     <input type="text" disabled id="projeto" value="Projeto Cliente A"/>
                  </div>
                  <div style={{flexDirection: 'row', gap: 15}}>
                     <div>
                        <label htmlFor="data">Data: </label>
                        <input type="date" id="data" value="Projeto Cliente A"/>
                     </div>
                     <div>
                        <label htmlFor="horas">Horas: </label>
                        <input type="number" id="horas" required min={0} />
                     </div>
                  </div>
                  <button type="submit"> Salvar </button>
               </form>
            </Form>
         </Container>
      </Overlay>
   );
}