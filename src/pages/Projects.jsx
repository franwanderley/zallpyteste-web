import React, { useContext, useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Modal } from '../components/Modal';
import { Container, Button, Hours, Project } from '../styles/project';
import { AuthContext } from '../context/AuthContext';
import { api } from '../services/api';

export function Projects(){
   const { projectSelected, user } = useContext(AuthContext);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [hours, setHours] = useState([]);

   useEffect(() => {
      async function getHours(){
         if(!projectSelected || isOpenModal){
            return ;
         }

         await api({
            method: 'GET',
            url: `/hours/project/${projectSelected?.id}`,
            headers: { 
               "authorization": user.token
             }
         })
         .then(res => setHours(res.data))
         .catch(err => console.log(err));
      }
      getHours();
   }, [projectSelected, isOpenModal]);

   if(!projectSelected){
      return (
         <div style={{display: 'flex', flexDirection: 'row'}}>
            <Sidebar/>
            <h2 style={{marginLeft: 50}}>Escolha um Projeto</h2>
         </div>
      );
   }
   return (
      <Container>
         { isOpenModal && <Modal {...{setIsOpenModal, hours}} /> }
         <Sidebar/>
         <Project>
            <h2>{projectSelected?.name}</h2>
            <p>{projectSelected?.description}</p>
               <h3>Equipe</h3>
            <div>
               {projectSelected?.users.map(user => (
                  <a key={user?.id} href={`mailto:${user?.email}`}>{user?.name}</a>
               ))}
            </div>
            <div>
               <h3>Horas Trabalhadas</h3>
               <Hours>
                  { hours.length > 0 ? (hours?.map(h => (
                     <li key={h?.id}>{`${h?.date} - ${h?.user.name} - ${String(h?.hours).padStart(2, '0')} hrs`}</li>

                  ))) : (
                     <li>Nenhuma hora cadastrada</li>
                  )}
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