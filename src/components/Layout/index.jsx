import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./index.styles";

function Layout({ children }) {
  return (
    <S.LayoutContainer id="top">
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.LayoutContainer>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
