import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 961px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 961px) {
    flex-direction: row;
  }
`;

export const DescriptionCard = styled.div`
  background-color: ${(props) => props.theme.colors.contrastLight};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  width: 90%;
  padding: 1.75rem;
  box-sizing: border-box;
  margin-bottom: 1rem;

  span {
    font-size: ${(props) => props.theme.size.big};
    color: ${(props) => props.theme.colors.red};
    display: block;
  }
  @media (min-width: 961px) {
    width: 40%;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.contrastLight};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  width: 90%;
  max-width: 450px;
  padding: 1.75rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  max-height: 300px;

  span {
    font-size: ${(props) => props.theme.size.big};
    color: ${(props) => props.theme.colors.red};
    text-align: center;
    display: inline-block;
  }
`;

export const RadioCard = styled.div`
  background-color: ${(props) => props.theme.colors.contrastLight};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  width: 90%;
  padding: 1.75rem;
  box-sizing: border-box;
  margin-bottom: 1rem;

  @media (min-width: 961px) {
    width: 40%;
    height: 190px;
  }
`;

export const CardItem = styled(Card)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "name img img img"
    "name img img img"
    "name img img img"
    "price img img img";
`;

export const CardTitle = styled.h1`
  font-size: ${(props) => props.theme.size.big};
  margin-bottom: 1rem;
  grid-area: name;
  overflow: auto;
`;

export const CardImg = styled.img`
  border-radius: 16px;
  height: 100%;
  width: 100%;
  grid-area: img;
  max-height: 260px;
  max-width: 260px;
`;

export const CardPostTitle = styled.h2`
  font-size: ${(props) => props.theme.size.regular};
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const CardPrice = styled.p`
  color: ${(props) => props.theme.colors.red};
  line-height: 1.2rem;
`;

export const CardText = styled.p`
  line-height: 1.5rem;
  text-align: justify;
  text-justify: inter-word;
`;

export const ItemSelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  margin: 10px 0;
  margin-left: 10px;

  @media (min-width: 700px) {
    display: flex;
    align-items: stretch;
  }
`;

export const FormCard = styled.div`
  background-color: ${(props) => props.theme.colors.contrastLight};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadow};
  width: 90%;
  padding: 1.75rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 961px) {
    width: 40%;
  }
`;

export const FormCardText = styled.p`
  font-size: ${(props) => props.theme.size.big};
  font-weight: 500;
  margin-bottom: 1rem;
`;
