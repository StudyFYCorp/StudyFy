import styled from "styled-components";

export const CampoCadastrar = styled.div`
   height: 100%;
   width: 100%;
   justify-content: left;
   display: flex;
   flex-direction: column;
   gap: 3vh;

   @media (min-width: 768px) {
      gap: 4vh;
   }
`

export const Descricao = styled.span`
   font-size: 5.5vw;
   display: flex;
   flex-direction: column;

   @media (min-width: 768px) {
      font-size: 1.3vw;
   }
`;

export const Botao = styled.div`
   background-color: #fee101;
   width: 100%;
   height: 20%;
   border-radius: 12px;
   display: flex;
   font-weight: bold;
   align-items: center;
   justify-content: center;
`

export const EnvioFormuario = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   gap: 1vh;
   height: 80%;
   width: 100%;
`


