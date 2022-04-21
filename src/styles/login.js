import styled from 'styled-components';

export const Container = styled.div`
   padding: 5%;
   display: flex;
   flex: 1;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: 100%;

   & img {
      width: 128px;
   }
`;

export const DivForm = styled.div`
   border: 1px solid #28464B;
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   & h3{
      font-size: 2rem;
      color: #28464B;
      text-align: center;
      font-weight: 600;
      margin-bottom: 20px;
   }

   & div{
      margin-bottom: 15px;
   }
   & label {
      color: #28464B;
      font-size: 1rem;
   }
   & input{
      border-radius: 6px;
      padding: 2px 0;
      min-width: 250px;
      margin-left: 10px;
      color: #28464B;
   }
`;
export const DivButton = styled.div`
   display: flex;
   flex-direction: column;
   margin: 10px auto;
   max-width: 50%;
   text-align: center;
   & a {
      margin-top: 10px;
   }
`;

export const Button = styled.button`
   color: #FAFAFF;
   border: none;
   border-radius: 12px;
   cursor: pointer;
   background-color: #003459;
   padding: 10px 12px;
`;