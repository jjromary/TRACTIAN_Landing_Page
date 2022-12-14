import styled from "styled-components";

export const CardFeedbackContainer = styled.div`
  width: 250px;
  height: 300px;
  background-color: ${(props) => props.theme["background-default"]};
  box-shadow: 6px 6px 4px ${(props) => props.theme["base-button"]};
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
  :hover {
    -webkit-transform: translateY(-8px);
    -moz-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    -o-transform: translateY(-8px);
    transform: translateY(-8px);
  }
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
