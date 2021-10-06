import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../styles/sidebar';

export function Sidebar(){
   return (
      <Container>
         <img src="./zallpylogo.png" alt="logo da zallpy" />
         <div>
            <a href="#">Projeto Cliente A</a>
            <a href="#">Projeto Cliente B</a>
         </div>
         <div style={{flexDirection: 'row'}}>
            <p style={{marginRight: 5}}>Wanderley</p>
            <Link to="/" style={{marginBottom: 20}} >Sair</Link>

         </div>
      </Container>
   );
}