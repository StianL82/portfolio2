import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.color.headerFooter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  padding: 15px 0;
`;

export const Navbar = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(10px, 4vw, 20px);
  overflow-x: hidden;
`;

export const LogoLink = styled.a`
  font-family: ${(props) => props.theme.typography.h3};
  color: ${(props) => props.theme.color.white};
  font-size: 28px;
  text-decoration: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export const NavLinks = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  a {
    padding: 10px 15px;
    color: ${(props) => props.theme.color.white} !important;
    text-decoration: none;
    font-size: clamp(18px, 2vw, 22px);
    font-family: ${(props) => props.theme.typography.h2};
    cursor: pointer;

    &:hover {
      text-decoration: underline !important;
      color: ${(props) => props.theme.color.white};
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
