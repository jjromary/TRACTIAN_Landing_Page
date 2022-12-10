import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme["background-default"]};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
