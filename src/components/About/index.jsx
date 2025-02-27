import React from "react";
import * as S from "./index.styles";

const About = () => {
  return (
    <S.AboutContainer id="about">
      <S.AboutImage>
        <img
          src="/images/me1_border.png"
          alt="Stian Lilleng by the sea on the coast of Helgeland"
        />
      </S.AboutImage>
      <S.AboutText>
        <h2>About me</h2>
        <p>
          My name is Stian Lilleng, and I live in Brønnøysund, where I work as a
          Senior Consultant at Brønnøysundregistrene. I have been employed there
          since 2003. In 2023, I decided to pursue a degree in Frontend
          Development at Noroff through online studies.
        </p>
        <p>
          The Frontend Development program at Noroff has covered a wide range of
          topics, from design principles and user experience to coding and
          testing. Throughout the course, we have worked with essential
          technologies such as HTML, CSS, and JavaScript, as well as CSS
          frameworks like Bootstrap and JavaScript frameworks like React.
        </p>
        <p>
          In this portfolio, I will present three of the projects we have worked
          on during the second year of our studies, demonstrating the skills and
          technologies I have developed.
        </p>
      </S.AboutText>
    </S.AboutContainer>
  );
};

export default About;
