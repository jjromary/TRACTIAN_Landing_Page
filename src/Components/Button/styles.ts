import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const ButtonContent = styled.button`
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme["base-button"]};
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.theme["base-white"]};

  @media (min-width: 1440px) {
    width: 288px;
  }
`;
