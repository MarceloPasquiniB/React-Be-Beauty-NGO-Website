import styled from "styled-components";
import img from "../../img/WomanBanner.jpg";

export const BannerImage = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url(${img});
  background-size: cover;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media (min-width: 961px) {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 85vh;
  }
`;

export const BannerText = styled.h1`
  color: ${(props) => props.theme.colors.contrastLight};
  font-size: ${(props) => props.theme.size.xbig};
  font-weight: bolder;
  margin: 10px 0;
`;

export const WhiteDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.contrastLight};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media (min-width: 961px) {
    height: 55vh;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const CounterWrapper = styled.div`
  padding: ${(props) => props.theme.size.regular};
  border: thick solid black;
  font-size: ${(props) => props.theme.size.big};
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
  width: 260px;
`;

export const NumberWrapper = styled.div`
  padding: ${(props) => props.theme.size.regular};
  font-size: ${(props) => props.theme.size.xbig};
  background-color: ${(props) => props.theme.colors.veryDark};
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const DescriptionText = styled.p`
  color: ${(props) => props.theme.colors.contrastDark};
  font-size: ${(props) => props.theme.size.regular};
  margin-bottom: 5px;
  max-width: 300px;
  text-align: justify;
  line-height: ${(props) => props.theme.size.regular};

  span {
    color: ${(props) => props.theme.colors.veryDark};
    font-weight: bold;
  }
`;

export const FacesDiv = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.veryDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const SubscriptionWrapper = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: ${(props) => props.theme.colors.contrastLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 961px) {
    height: 40vh;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const SubscriptionText = styled.p`
  color: ${(props) => props.theme.colors.contrastDark};
  font-size: ${(props) => props.theme.size.regular};
  max-width: 300px;
  line-height: ${(props) => props.theme.size.regular};

  @media (min-width: 961px) {
    font-size: ${(props) => props.theme.size.xbig};
    line-height: normal;
  }  
  span {
    color: ${(props) => props.theme.colors.veryDark};
    font-weight: bold;
  }
`;
