import { Container, Image, InfoContainer, Name, StatsContainer } from "./ServerCard.styled";

const ServerCard = () => {
  return (
    <Container>
      <Image src="/cryptosignal-thumb.png" height="64" width="64" />
      <InfoContainer>
        <Name>Crypto Signal</Name>
        <StatsContainer>
          <p>200</p> <p>1.10.5</p>
        </StatsContainer>
      </InfoContainer>
    </Container>
  );
};

export default ServerCard;
