import styled from 'styled-components';

export const Overlay = styled.div`
   background:rgba(0, 0, 0, 0.9);
   z-index: 10;
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content:center;
   align-items: center;
`;

export const Container = styled.div`
   background: #FAFAFF;
   width: 100%;
   max-width: 400px;
   padding : 2rem;
   border-radius: 6px;
   box-shadow: 0 0 60px rgba(0, 0, 0, .05);
   text-align: center;
   position: relative;
   & h3{
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      color: #28464B;   
   }
`;
export const BtnClose = styled.button`
   position: absolute;
   top: 2%;
   right: 2%;
   background: transparent;
   font-size: 30px;
   font-weight: 400;
   border: none;
   cursor: pointer;
   color: var(--title);
   transition: .2s color;

   &:hover{
      filter: brightness(.9);
   }
`;

export const Form = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top:  20px;
   width: 100%;

   & div {
      display: flex;
      flex-direction:row;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 20px;
   }
   & input{
      padding: 5px;
      width: 100%;
      border: 1px solid #28464B;
      border-radius: 6px;
      color: #28464B;
      font-size: 13px;
      margin-left: 5px;
   }
   & button {
      padding: 4% 5%;
      color: #FAFAFF;
      border: none;
      border-radius: 6px;
      background: #28464B;
      white-space: nowrap;
      font-size: 16px;
      cursor: pointer;
      font-weight: 500;
      &:hover{
         filter: opacity(.9);
      }
   }
`;
