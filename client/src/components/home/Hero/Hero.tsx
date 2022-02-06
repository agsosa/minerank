import { Container, ContentOverlay, HeroContent, Left, Right } from "./Hero.styled";
import Image from "next/image";
import { Button } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <Container>
      <ContentOverlay />
      <HeroContent>
        <Left>
          <Image src="/heroimg.png" width="500" height="500" />
        </Left>
        <Right>
          <h1>Descubre los mejores servidores de Minecraft</h1>
          <h2>La lista de servidores de Minecraft #1</h2>
          <h3>Más de 150 servidores de Minecraft, 50 categorías, 150 jugadores en línea y más!</h3>
          <Button startIcon={<FaSearch />} variant="contained" size="large">
            Explorar Servidores
          </Button>
        </Right>
      </HeroContent>
    </Container>
  );
};

export default Hero;
