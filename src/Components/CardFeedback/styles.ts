import styled from "styled-components";

export const CardFeedbackContainer = styled.div`
  width: 250px;
  height: 300px;
  background-color: ${(props) => props.theme["background-default"]};
  box-shadow: 6px 6px 4px #3dcc84;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

export const ClientsData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const Avatar = styled.div``;

export const Name = styled.div`
  font-weight: 700;
  font-size: 1rem;
  line-height: 18px;
`;

export const Position = styled.span`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
`;

export const FeedbackUser = styled.span`
  width: 90%;
  height: 143px;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  line-height: 18px;
  text-align: left;
`;
