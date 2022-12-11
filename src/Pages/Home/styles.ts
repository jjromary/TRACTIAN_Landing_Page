import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 375px) {
  }

  @media (min-width: 425px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme["blue-brand"]};

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
  background-color: ${(props) => props.theme["blue-brand"]};
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

export const AssetControlContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 1rem;
    width: 250px;
    height: 297px;

    @media (min-width: 768px) {
      width: 350px;
      height: 450px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const SensorContent = styled.div`
  width: 90%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ImageContainer = styled.div`
  width: 235px;
  display: flex;
  justify-content: center;
`;

export const Sensor = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const SensorName = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
  color: ${(props) => props.theme["base-text"]};
  display: flex;
  justify-content: left;

  @media (min-width: 1024px) {
    width: 250px;
  }
`;
export const SensorDescrition = styled.span`
  margin-top: 1rem;
`;

export const SubTitle = styled.span`
  width: 90%;
  font-size: 1.5rem;
  margin-top: 1rem;
  text-align: center;
  color: ${(props) => props.theme["base-text"]};

  @media (min-width: 1024px) {
    width: 400px;
  }

  @media (min-width: 1440px) {
    width: 40%;
  }
`;

export const ClientsContainer = styled.div`
  width: 90%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  img {
    width: 250px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

// export const FeedbackContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
