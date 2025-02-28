import React from "react";
import * as S from "./index.styles";

/**
 * Header component containing the navigation menu.
 * Provides smooth scrolling to different sections of the page.
 *
 * @component
 * @param {string} id - The ID of the section to scroll to.
 * @param {number} offset - The offset in pixels for the scroll position.
 */

const Header = () => {
  const handleScroll = (id, offset) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = offset;
      const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <S.HeaderContainer>
      <S.Navbar>
        <S.LogoLink onClick={() => handleScroll("top", 0)}>
          <h3>Stian Lilleng</h3>
        </S.LogoLink>
        <S.NavLinks>
          <ul>
            <li>
              <a onClick={() => handleScroll("about", 60)}>ABOUT ME</a>
            </li>
            <li>
              <a onClick={() => handleScroll("projects", 120)}>PROJECTS</a>
            </li>
            <li>
              <a onClick={() => handleScroll("contact", 80)}>CONTACT</a>
            </li>
          </ul>
        </S.NavLinks>
      </S.Navbar>
    </S.HeaderContainer>
  );
};

export default Header;
