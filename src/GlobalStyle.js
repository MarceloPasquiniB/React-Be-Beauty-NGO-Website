import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${props => props.theme.colors.veryDark};
    color: ${(props) => props.theme.colors.contrastDark};
	font-family: ${(props) => props.theme.font.body};
}


`;