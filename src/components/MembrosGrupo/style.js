import styled from "styled-components";

export const AbaMembros = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   overflow-y: auto;
`

export const Membro = styled.div`
   display: flex;
   width: 100%;
   min-height: 7.5vh;
   max-height: 7.5vh;
   border-bottom: solid #d9d9d9 3px; 
   
   &:hover {
      background-color: #d9d9d9; // Cor ao passar o mouse
   }
`;

export const AreaImg = styled.div`
   height: 100%;
   width: 18%;
   align-items: center;
   justify-content: center;
   display: flex;
`

export const FtPerfil = styled.img`
   height: 80%;
   width: 80%;
`

export const Apresentacao = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 45%;
   max-width: 45%;
   justify-content: space-evenly;
`

export const NomeMembro = styled.span`
   font-size: 3.5vw;
   font-weight: bold;
`

export const Estudando = styled.div`
   display: flex;
   flex-direction: column;
`

export const Materias = styled.span`
   font-size: 2vw;
`

export const InfoDiv = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   align-items: start;
   justify-content: center;
   width: 37%;
`

export const Info = styled.div`
   font-size: 1.8vw
`
