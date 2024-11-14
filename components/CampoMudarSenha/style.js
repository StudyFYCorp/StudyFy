import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CampoCadastrar = styled.div`
   height: 80%;
   background-color: 28
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
   font-size: 4.5vw;
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
   height: 55%;
   width: 100%;
   justify-content: space-evenly;
`;

export const CampoSenha = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 3vw;
  width: 100%;
  min-height: 18%;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  position: relative; /* Para que o label posicionado absoluto funcione */
  border-color: ${props => (props.erro ? 'red' : '#d9d9d9')}; /* Borda vermelha se houver erro */

  &:focus-within {
    border-color: #FEE101; /* Cor desejada quando o input estiver focado */
  }

  @media (min-width: 768px) {
     height: 15%;
   }
`;

export const Label = styled.label`
   position: absolute;
   left: 5%;
   top: 25%;
   font-size: 4vw;
   color: #d9d9d9;
   transition: all 0.3s ease;
   pointer-events: none; /* Para que o label não interfira nos cliques do input */

   @media (min-width: 768px) {
      font-size: 1.3vw;
   }
`;

export const Input = styled.input`
   font-size: 3vw;
   border: none;
   outline: none;
   background-color: transparent;
   width: 100%;
   height: 100%;
   box-sizing: border-box;

   @media (min-width: 768px) {
      font-size: 1vw;
   }

   &:focus + ${Label},
   &:valid + ${Label} {
      top: -20%;
      left: 0%;
      font-size: 3vw;
      color: #FEE101;
      background: white;
      padding: 0 2%;
      z-index: 1; /* Para que o label fique acima do input */

      @media (min-width: 768px) {
         font-size: 1vw;
      }
   }
`;

export const EntradaInfo = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   padding-left: 5%;

   @media (min-width: 768px) {
      padding-left: 5%;
   }
`;

export const EntradaInfoCodigo = styled.div`
   position: relative;
   width: 40%;
   height: 100%;
   border-radius: 8px;
   border: solid 1px #d9d9d9;

   &:focus-within {
      border-color: #FEE101; /* Cor desejada quando o input estiver focado */
   }

   @media (min-width: 768px) {
      padding-left: 5%;
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
      font-size: 2vw;
   }
`

export const BotaoMudar = styled.div`
   background-color: #fee101;
   width: 50%;
   height: 50%;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   clickable: pointer;
`

export const MensagemErro = styled.span`
   color: red;
   font-size: 3vw;
   height: 15%;

   @media (min-width: 768px) {
      font-size: 1vw;
   }
`

export const CampoEnvioFormulario = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   justify-content: space-evenly;
   align-items: center;
`

export const VoltarLogin = styled(Link)`
   font-size: 2.5vw;
   text-decoration: none; /* Remove o sublinhado */
   color: black; /* Define a cor do texto */
   cursor: pointer; /* Mantém o comportamento de link */
   
   &:hover {
      color: gray; /* Cor opcional para o estado de hover */
   }
`
