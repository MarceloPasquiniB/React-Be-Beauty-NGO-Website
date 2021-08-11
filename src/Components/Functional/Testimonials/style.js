import styled from "styled-components";

export const DesktopWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const TestimonialsWrapperDesktop = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const SwiperWrapper = styled.div`
  width: 90%;
`;

export const TestimonialsWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Face = styled.img`
  border-radius: 56px;
  border: medium solid black;
  max-width: 150px;
`;

export const FaceText = styled.p`
  font-style: italic;
  color: black;
  font-size: ${(props) => props.theme.size.small};
  padding: 50px 50px 50px 30px;
  line-height: 1.6rem;

  span {
    font-style: normal;
    color: ${(props) => props.theme.colors.contrastLight};
  }
`;
