import { Container, ContentOverlay, HeroContent, Left, Right } from "./Hero.styled";

const Hero = () => {
  return (
    <Container>
      <ContentOverlay />
      <HeroContent>
        <Left>
          <h1>IMAGE</h1>
        </Left>
        <Right>
          <h1>Discover the best Telegram Channels</h1>
          <h2>#1 Directory of The Best Telegram Channels, Groups, and Bots.</h2>
          <h3>More than 21,000 Channels, Groups, Bots, and Stickers in 18 Languages!</h3>
          <button>TOP 100 MEDIA</button>
        </Right>
      </HeroContent>
    </Container>
  );
};

export default Hero;
