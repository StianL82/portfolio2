import React from "react";
import * as S from "./index.styles";

/**
 * Contact Component
 *
 * Displays contact information, including an email address and social media links.
 * Also includes a logo and a thank-you message for visitors.
 *
 * @component
 * @returns {JSX.Element} The rendered Contact component.
 */

const Contact = () => {
  return (
    <S.ContactSection>
      <S.ContactText>
        <h2 id="contact">Contact</h2>
        <p>
          Feel free to contact me via email or through social media if you have
          any questions.
        </p>
        <h3>
          e-mail:{" "}
          <a href="mailto:stian.lilleng@gmail.com">stian.lilleng@gmail.com</a>
        </h3>
      </S.ContactText>

      <S.SocialIcons>
        <a
          href="https://www.facebook.com/stian.lilleng"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/facebook-icon.png" alt="Facebook Icon" />
        </a>
        <a
          href="https://github.com/StianL82"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github-icon.png" alt="Github Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/stian-lilleng-39423415b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/linkedin-icon.png" alt="LinkedIn Icon" />
        </a>
      </S.SocialIcons>

      <S.ContactImage>
        <img src="/images/logo.png" alt="A logo with the initials SL" />
      </S.ContactImage>

      <S.ThankYouText>Thank you for visiting.</S.ThankYouText>
    </S.ContactSection>
  );
};

export default Contact;
