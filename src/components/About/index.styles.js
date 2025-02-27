import styled from "styled-components";

export const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: center;
  padding: 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const AboutImage = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: min(220px, 70vw);
    height: auto;
    border-radius: 10px;
  }
`;

export const AboutText = styled.div`
  h2 {
    font-size: clamp(30px, 4vw, 38px);
    color: ${(props) => props.theme.color.white};
  }

  p {
    font-size: clamp(16px, 2vw, 18px);
    color: ${(props) => props.theme.color.white};
    line-height: 1.6;
    word-break: break-word;
    overflow-wrap: break-word;

    @media (max-width: 480px) {
      padding: 5px;
    }
  }
`;
