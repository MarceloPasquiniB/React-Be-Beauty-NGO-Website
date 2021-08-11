import styled from "styled-components";

export const Nav = styled.div`
  opacity: 1;
  z-index: 99;
  top: 0;
  position: sticky;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.contrastLight};
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;

  span {
    height: 2px;
    width: 25px;
    background-color: ${(props) => props.theme.colors.contrastDark};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5px;
`;

export const Logo = styled.img`
  height: 5rem;
  width: 4rem;
  padding: 4px;
`;

export const LogoName = styled.a`
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.veryDark};
  text-decoration: none;
  font-weight: 800;
  font-size: ${(props) => props.theme.size.big};

  span {
    font-weight: 300;
    font-size: ${(props) => props.theme.size.regular};
    color: ${(props) => props.theme.colors.contrastDark};
  }
`;

export const LogoPet = styled.img`
  size: 3rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "100px" : "0")};
    transition: height 0.3s ease-in;
  }
`;

export const MenuItem = styled.span`
  > * {
  padding: 3rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.contrastDark};
  transition: all 0.3s ease-in;
  font-size: ${(props) => props.theme.size.xsmall};

  &:hover {
    color: ${(props) => props.theme.colors.veryDark};
  }
}
`;
