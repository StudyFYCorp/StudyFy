import styled from "styled-components";

export const Campos = styled.div`
   display: flex;
   flex-direction: row;
   align-items: top;
   justify-content: center;
   width: 100%;
   height: 30%;
   gap: 2vw;

   @media (min-width: 768px) {
      height: 50%;
    }

`;

export const div = styled.div`
   display: flex;
   flex-direction: column;
   align-items: left;
   justify-content: center;
   width: 100%;
   height: 100%;

   @media (min-width: 768px) {
      height: 50%;
    }
`;

export const Dia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    height: 100%;
    width: 30%;
    align-items: center;
    outline: none;

    :focus {
        outline: none; /* Remove o outline padrão */
        border: none; /* Remove a borda ao focar */
        box-shadow: none; /* Remove qualquer sombra que possa aparecer */
    }
`

export const Mes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    height: 100%;
    width: 30%;
    align-items: center;

    :focus {
        outline: none; /* Remove o outline padrão */
        border: none; /* Remove a borda ao focar */
        box-shadow: none; /* Remove qualquer sombra que possa aparecer */
    }
`

export const Ano = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    height: 100%;
    align-items: center;
    width: 40%;

    :focus {
        outline: none; /* Remove o outline padrão */
        border: none; /* Remove a borda ao focar */
        box-shadow: none; /* Remove qualquer sombra que possa aparecer */
    }
`

export const NomeEntrada = styled.div`
    font-size: 4vw;

    @media (min-width: 768px) {
       font-size: 2vw;
    }
`

export const EntradaInfo = styled.div`
   display: flex;
   flex-direction: row;
   gap: 2vw;
   width: 100%;
   height: 40%;
   align-items: center;
   border: solid 1px #d9d9d9;
   border-radius: 8px;
   justify-content: space-evenly;

      
   &:focus-within {
      border-color: #FEE101; /* Cor desejada quando o input estiver focado */
   }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 20%; /* Ajuste conforme necessário */
  width: 30%;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ddd;
  background-color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MensagemErro = styled.span`
  font-size: 3vw;
  color: red;
`

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

export const Input = styled.input`
    height: 60%;
    width: 50%;
    border: none;
    background-color: transparent;

    ::placeholder {
        font-size: 1vw; /* Ajuste o tamanho conforme necessário */
        color: #a9a9a9; /* Exemplo de cor para o placeholder */
    }
`;

export const Descricao = styled.span`
   font-size: 5.5vw;
   display: flex;
   flex-direction: column;

   @media (min-width: 768px) {
      font-size: 1.3vw;
   }
`;

export const CadastroGoogle = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   gap: 4%;
`

export const DescricaoGoogle = styled.span`
   font-size: 3.5vw;

   @media (min-width: 768px) {
      font-size: 1vw;
   }
`

export const ImgGoogle = styled.img`
   width: 6vw; 
   height: 3vh;

   @media (min-width: 768px) {
      height: 3vh;
      width: 1.5vw;
   }
`

export const CampoBotao = styled.div`
   width: 100%
`

export const Botao = styled.div`
   background-color: #fee101;
   margin-left: auto;
   width: 50%;
   min-height: 60%;
   max-height: 60%;
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
   height: 25%;
   width: 100%;
   margin-top: auto;

   @media (min-width: 768px) {
      height: 16%;
    }
`

export const SemConta = styled.div`
  display: flex;
  gap: 3%;
  width: 100%;
  justify-content: right;
  font-size: 3vw; /* Define o tamanho da fonte para todo o texto na div */

  @media (min-width: 768px) {
     font-size: 1vw;
   }
`;

export const Erro = styled.span`
   font-size: 3.5vw;
   color: red;

   @media (min-width: 768px) {
      font-size: 1vw;
   }
`


