import styled from "styled-components";

export const FooterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 15vh;
    background-color: ${props => props.theme.colors.veryDark};
    bottom: 0;
`;

export const IconWrapper = styled.div`
    margin: 15px;
    cursor: pointer;
`;