import ServerCard from "../../common/ServerCard";
import {
  Grid,
  Container,
  FeaturedGrid,
  FeaturedTitle,
  PromoBox,
  Section,
} from "./ServersList.styled";
import { FaStar, FaList } from "react-icons/fa";

const ServersList = () => {
  return (
    <Container>
      <Section>
        <FeaturedTitle>
          <FaStar color="gold" />
          <h2>Servidores de Minecraft destacados</h2>
        </FeaturedTitle>

        <FeaturedGrid>
          <ServerCard />
          <ServerCard />
          <ServerCard />
        </FeaturedGrid>

        <PromoBox>
          ¿Te interesa promocionar tu servidor de Minecraft? Click aquí para más información
        </PromoBox>
      </Section>

      <Section>
        <FeaturedTitle>
          <FaList />
          <h2>Lista de Servidores de Minecraft</h2>
        </FeaturedTitle>
        <Grid>
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
        </Grid>
      </Section>
    </Container>
  );
};

export default ServersList;
