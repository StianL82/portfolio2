import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./index.styles";

/**
 * Layout Component
 *
 * Provides a structured layout for the application, including a header,
 * main content area, and footer.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {React.ReactNode} props.children - The content to be displayed within the layout.
 * @returns {JSX.Element} The rendered layout component.
 */

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
