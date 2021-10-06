import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Project = styled.div`
  display: flex;
  width: 100%;
  margin-left: 5%;
  margin-top: 50px;
  flex-direction:column;
  align-items: left;
  color: #28464B;
  
  & a{
    font-size: 1rem;
    line-height: 1.5rem;
    text-decoration: none;
    color: #003459;
  }
  & a:hover{
    filter: opacity(.9);
  }

  & h2{
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  & h3 {
    font-size: 1.5rem;
    margin-top: 10px;
  }

  & div {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const Hours = styled.div`
  margin-top: 5px;
  & li {
    list-style-type: none;
    line-height: 1.6rem;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
   color: #FAFAFF;
   border: none;
   border-radius: 8px;
   display: flex;
   cursor: pointer;
   background-color: #003459;
   padding: 10px 12px;
   margin-top: 10%;
`;