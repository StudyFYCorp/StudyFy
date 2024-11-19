import styled from "styled-components";

export const Campo = styled.div`
   height: 6%;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media(min-width: 768px) {
      height: 8%;
   }
`;

export const InputContainer = styled.div`
   display: flex;
   align-items: center;
   width: 80%;
   height: 100%;
   background-color: #d9d9d9;
   justify-content: flex-start;
   border-radius: 12px
`;

export const Input = styled.input`
   outline: none;
   border: none;
   width: 90%;
   height: 100%;
   background-color: transparent;
   border-radiu: 12px;
   padding-inline: 5%;
`;