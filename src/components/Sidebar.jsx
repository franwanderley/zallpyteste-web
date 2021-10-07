import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { api } from '../services/api';
import { Container } from '../styles/sidebar';

export function Sidebar(){
   const { user, signOut, setProjectSelected } = useContext(AuthContext);
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
         .then(res => setProjects(
            res?.data?.filter(project => project.users.map(u => {
               console.log([u.id, user.id]);
            } ))
         ))
         .catch(err => console.error(err));
      }
      getProjects();
   }, []);
   return (
      <Container>
         <img src="./zallpylogo.png" alt="logo da zallpy" />
         <div>
            {projects?.map(project => (
               <a key={project.id} onClick={() => setProjectSelected(project)} href="#">{project.name}</a>
            ))}
         </div>
         <div style={{flexDirection: 'row'}}>
            <p style={{marginRight: 5}}>{user.username?.split('@')[0]}</p>
            <a href="" style={{marginBottom: 20}} onClick={signOut} >Sair</a>

         </div>
      </Container>
   );
}