import styled from "styled-components";

export const ProjectsContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 10px;
  text-align: center;

  h2 {
    font-size: clamp(30px, 4vw, 38px);
    color: ${(props) => props.theme.color.white};
    margin-bottom: 40px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.color.lightGray};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 60px;
  overflow: hidden;

  @media (max-width: 660px) {
    flex-direction: column;
    max-width: 90%;
  }
`;

export const CardImage = styled.figure`
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    display: block;

    @media (max-width: 660px) {
      width: 100%;
      height: 250px;
      object-fit: cover;
      object-position: center top;
      border-radius: 0;
      border-bottom: 2px solid ${(props) => props.theme.color.lightGray};
    }
  }

  @media (max-width: 660px) {
    align-items: flex-start;
    height: auto;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: left;
  gap: 10px;
  flex: 2;

  h3 {
    font-size: 22px;
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.h2};
  }

  h4 {
    font-size: 18px;
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.typography.h2};
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 660px) {
    flex: unset;
    gap: 5px;

    h3 {
      text-align: center;
    }

    .card-buttons {
      display: flex;
      justify-content: center;
    }
  }
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.color.lightBlue};
  color: ${(props) => props.theme.color.black};
  text-decoration: none;
  transition:
    background-color 0.3s,
    color 0.3s;
  border: 2px solid ${(props) => props.theme.color.headerFooter};
  border-radius: 5px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.color.headerFooter};
    color: ${(props) => props.theme.color.white};
    border: 2px solid ${(props) => props.theme.color.lightBlue};
  }
`;
