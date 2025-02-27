import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.color.headerFooter};
  color: white;
  padding: 40px;
  text-align: center;
  position: relative;
  width: 100%;
  left: 0;
  margin-top: auto;
`;

export const FooterText = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
`;
