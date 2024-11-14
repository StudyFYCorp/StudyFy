import styled from "styled-components";

export const CampoCadastrar = styled.div`
   height: 80%;
   width: 100%;
   justify-content: left;
   display: flex;
   flex-direction: column;
   gap: 3vh;

   @media (min-width: 768px) {
      gap: 7vh;
      height: 100%;
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

export const CampoPreencher = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   height: 50%;
   width: 100%;
   background-color: green;
   gap: 1vh;
`;

export const Campos = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr); /* Cria duas colunas de igual tamanho */
   grid-template-rows: repeat(5, 1fr); /* Cria duas linhas de igual tamanho */
   align-items: center;
   width: 100%;
   height: 100%;
   gap: 2vh 3vw;

   @media (min-width: 768px) {
      height: 100%;
   }
`;

export const Materia = styled.div`
   display: flex;
   flex-direction: row;
   gap: 2vw;
   align-items: center;
`;

export const CheckBox = styled.input`
   height: 100%;
   width: 15%;
`;

export const NomeMateria = styled.span`
   font-size: 4vw;

   @media (min-width: 768px) {
      font-size: 1.5vw;
   }
`

export const Botao = styled.div`
   background-color: #fee101;
   margin-left: auto;
   width: 50%;
   min-height: 100%;
   max-height: 100%;
   border-radius: 12px;
   display: flex;
   font-weight: bold;
   align-items: center;
   justify-content: center;
`

export const EnvioFormuario = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: flex-end;
   gap: 1vh;
   min-height: 10%;
   width: 100%;
   margin-top: auto;
`