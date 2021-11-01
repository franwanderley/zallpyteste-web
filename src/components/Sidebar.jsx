import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { api } from '../services/api';
import { Container } from '../styles/sidebar';

export function Sidebar(){
   const { user, signOut, projectSelected, setProjectSelected } = useContext(AuthContext);
   const [projects, setProjects] = useState();

   useEffect(() => {
      async function getProjects(){
         await api({
            method: 'GET',
            url: '/projects',
            headers: {
               "authorization": user?.token
            }
         })
         .then(res => setProjects(res?.data))
         .catch(err => console.error(err));
      }
      getProjects();
   }, []);
   return (
      <Container>
         <img src="./zallpylogo.png" alt="logo da zallpy" />
         <div>
            {projects?.map(project => (
               <a 
                  key={project.id} 
                  onClick={() => setProjectSelected(project)}
                  href="#"
                  style={projectSelected === project ? {  borderBottom: '1px solid #FAFAFF' }: {}}
               >{project.name}</a>
            ))}
         </div>
         <div style={{flexDirection: 'row'}}>
            <p style={{marginRight: 5}}>{user?.username?.split('@')[0]}</p>
            <a href="" style={{marginBottom: 20}} onClick={signOut} >Sair</a>

         </div>
      </Container>
   );
}