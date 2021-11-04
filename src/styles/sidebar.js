import styled from 'styled-components';

export const Container = styled.div`
   position: relative;
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

   @media (max-width: 768px) {
      position: absolute;
      left: ${({isOpenSidebar}) => isOpenSidebar ? 0 : '-1000px'};
      transition: left .2;
      width: 80%;
   }

`;

export const MenuMobile = styled.div`
   display: none;
   position: fixed;
   z-index: 999;
   background-color: #28464B;
   align-items: center;
   padding: 2%;
   height: 5%;
   cursor: pointer;
   @media (max-width: 768px) {
      display: flex;
   }
`;