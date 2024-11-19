import styled from "styled-components";

export const FundoDesktop = styled.img`
    visibility: hidden;
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;

    @media (min-width: 768px) {
        visibility: visible;
    }
`;

export default FundoDesktop;
