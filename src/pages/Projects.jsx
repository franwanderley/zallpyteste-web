import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Modal } from '../components/Modal';
import { Container, Button, Hours, Project } from '../styles/project';

export function Projects(){
   const [isOpenModal, setIsOpenModal] = useState(false);
   return (
      <Container>
         { isOpenModal && <Modal setIsOpenModal={setIsOpenModal} /> }
         <Sidebar/>
         <Project>
            <h2>Projetos cliente A</h2>
            <p>Criação do site do KD minha Oficina, onde o motorista poderá contratar oficinas,
            fazer orçamento e muito mais.</p>
               <h3>Equipe</h3>
            <div>
               <a href="mailto:wanderley4101@gmail.com">Francisco Wanderley</a>
               <a href="mailto:luisfelipe4101@gmail.com">Luis Felipe</a>
            </div>
            <div>
               <h3>Horas Trabalhadas</h3>
               <Hours>
                  <li>04/10/2021 - Francisco Wanderley - 06 hours</li>
                  <li>04/10/2021 - Luis Felipe - 08 hours</li>
                  <li>05/10/2021 - Francisco Wanderley- 06 hours</li>
                  <li>05/10/2021 - Luis Felipe - 08 hours</li>
                  <li>06/10/2021 - Francisco Wanderley - 06 hours</li>
               </Hours>
               <div style={{width: 105}}>
                  <Button onClick={() => setIsOpenModal(true)}>Lançar Horas</Button>
               </div>
            </div>
                        


         </Project>

         <div>

         </div>
      </Container>
   );
}