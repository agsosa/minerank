import Comments from "./Comments";
import { Container, ContentCard, TitleContainer } from "./RightColumn.styled";
import Button from "@mui/material/Button";
import { FaFlag } from "react-icons/fa";

const RightColumn = () => {
  return (
    <Container>
      <ContentCard>
        <TitleContainer>
          <h2>(country flag) Cryptosignal MC (#1)</h2>
          <Button startIcon={<FaFlag />} color="error" size="small">Reportar</Button>
        </TitleContainer>

        <p id="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>

        <p>Puesto #1 Click para Votar</p>

        <p>Modos de juego: Factions, PVP Survival</p>
        <p>Versiones: v1.8, v1.9, v1.5</p>
        <p>No PREMIUM</p>
        <p>Links: discod etc</p>
      </ContentCard>

      <Comments />
    </Container>
  );
};

export default RightColumn;
