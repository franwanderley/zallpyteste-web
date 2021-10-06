import styled from 'styled-components';

export const Container = styled.div`
   width: 20%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   height: 100vh;
   background-color: #28464B;
   color: #FAFAFF;
   
   & img{
      width: 96px;
   }
   & div{
      display: flex;
      flex-direction: column;
   }
   
   & a{
      color: #FAFAFF;
      text-decoration: none;
      font-size: 1rem;
      margin-bottom: 10px;
   }
   & a:hover{
      filter: opacity(.9);
   }

`;