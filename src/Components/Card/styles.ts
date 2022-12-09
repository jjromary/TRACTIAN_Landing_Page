import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 235px;
  margin-top: 1rem;
  border: 1px solid #b2b3b4;
  border-radius: 8px;
  color: ${(props) => props.theme["base-text"]};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  margin-top: 1rem;
`;
export const Description = styled.span`
  width: 230px;
  height: 90px;
  margin-top: 1rem;
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
`;
