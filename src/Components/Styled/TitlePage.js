import styled from "styled-components";

export const TitleWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const TitlePage = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${props => props.theme.font.title};
	font-size: ${props => props.theme.size.big};
	background-color: ${props => props.theme.colors.contrastLight};
    border-radius: 10px;
	box-shadow: ${props => props.theme.shadow};
	height: 4.75rem;
	margin-top: 1.25rem;
	margin-bottom: 2rem;
	width: 80%;
`;
