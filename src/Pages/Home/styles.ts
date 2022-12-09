import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 375px) {
    width: 90%;
  }

  @media (min-width: 425px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 1440px) {
    width: 90%;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  img {
    @media (min-width: 1024px) {
      width: 600px;
      height: 84px;
    }
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
`;

export const TopContent = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-white"]};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 2.25rem;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 90%;
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    width: 512px;
    height: 512px;
  }
`;

export const TypesSolutions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.5rem;
  }

  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    gap: 2rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

export const SectionTwo = styled.div``;
