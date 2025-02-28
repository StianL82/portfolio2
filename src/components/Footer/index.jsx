import React from "react";
import * as S from "./index.styles";

/**
 * Footer Component
 *
 * Renders the footer section with a copyright notice.
 *
 * @component
 * @returns {JSX.Element} The rendered Footer component.
 */


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
