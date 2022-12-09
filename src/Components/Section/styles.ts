import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: 1150px;
  margin-top: 2rem;
  background-color: ${(props) => props.theme["background-default"]};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
