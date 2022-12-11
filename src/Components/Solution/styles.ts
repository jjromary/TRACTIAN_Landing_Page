import styled from "styled-components";

export const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const TitleSolution = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  span {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-white"]};
    padding-left: 1rem;
  }
`;

export const DescriptionSolution = styled.span`
  margin: 0 auto;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme["base-white"]};
  margin-top: 0.5rem;
  width: 250px;
`;
