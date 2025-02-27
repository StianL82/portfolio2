import styled from "styled-components";

export const Divider = styled.div`
  width: 80%;
  background-image: url("/images/divider.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  height: 40px;
  padding: 0;

  @media (max-width: 1040px) {
    width: 75%;
  }
`;
