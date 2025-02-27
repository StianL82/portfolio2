import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  color: ${(props) => props.theme.color.white};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContactText = styled.div`
  max-width: 800px;
  margin-bottom: 30px;

  h2 {
    font-size: clamp(30px, 4vw, 38px);
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.h2};
    word-break: break-word;
    overflow-wrap: break-word;
  }

  a {
    color: ${(props) => props.theme.color.lightBlue};
    text-decoration: none;
    word-break: break-word;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 40px 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(40px, 6vw, 55px);
    height: clamp(40px, 6vw, 55px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 480px) {
    gap: 20px;

    a {
      width: clamp(30px, 5vw, 45px);
      height: clamp(30px, 5vw, 45px);
    }
  }
`;

export const ContactImage = styled.figure`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  img {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    img {
      max-width: 70%;
    }
  }
`;

export const ThankYouText = styled.h3`
  margin-bottom: 80px;
  font-size: clamp(18px, 2vw, 22px);
  font-weight: bold;
`;
