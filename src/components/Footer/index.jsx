import React from "react";
import * as S from "./index.styles";

function Footer() {
  return (
    <S.FooterContainer>
      <div className="container">
        <S.FooterText>
          &copy; {new Date().getFullYear()} Stian Lilleng
        </S.FooterText>
      </div>
    </S.FooterContainer>
  );
}

export default Footer;
