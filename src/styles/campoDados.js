import styled from "styled-components";

export const CampoDados = styled.div`
   height: 55%;
   width: 90%;
   background-color: white;
   place-self: center;
   bottom: 0;
   margin-bottom: 6vh;
   padding: 5% 10% 5% 5%;
   position: absolute;

   @media(min-width: 768px){
      height: 85%;
      width: 30%;
      border-radius: 12px;
      box-shadow: 0 0 12px 3px #dedede;
      padding: 3% 2% 5% 2%;
      left: 36%;
      }
`;

export default CampoDados
