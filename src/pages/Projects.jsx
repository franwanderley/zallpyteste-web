import React, { useContext, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Modal } from '../components/Modal';
import { Container, Button, Hours, Project } from '../styles/project';
import { AuthContext } from '../context/AuthContext';

export function Projects(){
   const { projectSelected } = useContext(AuthContext);
   const [isOpenModal, setIsOpenModal] = useState(false);
   if(!projectSelected){
      return (
         <Container>
            <Sidebar/>
            <h2 style={{justifySelf: 'left'}}>Escolha um Projeto</h2>
         </Container>
      );
   }
   return (
      <Container>
         { isOpenModal && <Modal setIsOpenModal={setIsOpenModal} /> }
         <Sidebar/>
         <Project>
            <h2>{projectSelected?.name}</h2>
            <p>{projectSelected?.description}</p>
               <h3>Equipe</h3>
            <div>
               {projectSelected?.users.map(user => (
                  <a key={user?.id} href={`mailto:${user?.email}`}>{user?.name}</a>
               ))}
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