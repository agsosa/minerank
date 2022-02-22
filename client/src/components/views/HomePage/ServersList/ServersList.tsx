import ServerCard from "src/components/common/ServerCard";
import {
  Grid,
  Container,
  FeaturedGrid,
  FeaturedTitle,
  PromoBox,
  Section,
} from "./ServersList.styled";
import { FaStar, FaList, FaPlus } from "react-icons/fa";
import Carousel from "src/components/common/Carousel";
import Pagination from "@mui/material/Pagination";

const ServersList = () => {
  return (
    <Container>
      <Section>
        <FeaturedTitle>
          <FaStar color="gold" />
          <h2>Servidores de Minecraft destacados</h2>
        </FeaturedTitle>

        <FeaturedGrid>
          <ServerCard isFeatured />
          <ServerCard isFeatured />
          <ServerCard isFeatured />
        </FeaturedGrid>

        <PromoBox>
          ¿Te interesa promocionar tu servidor de Minecraft? Click aquí para más información
        </PromoBox>
      </Section>

      <Section>
        <FeaturedTitle>
          <FaList />
          <h2>Servidores de Minecraft</h2>
        </FeaturedTitle>
        <p>Filtros aplicados: Roleplay PVP, 1.8, no premium, "nombre del servidor"</p>
        <Grid>
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
        </Grid>
        <Pagination sx={{ alignSelf: "center" }} count={10} color="primary" />
      </Section>

      <Section>
        <FeaturedTitle>
          <FaPlus />
          <h2>Últimos servidores de Minecraft agregados</h2>
        </FeaturedTitle>
        <Carousel>
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
        </Carousel>
      </Section>
    </Container>
  );
};

export default ServersList;
