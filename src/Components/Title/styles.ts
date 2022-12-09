import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const TitleContent = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme["base-text"]};
`;
