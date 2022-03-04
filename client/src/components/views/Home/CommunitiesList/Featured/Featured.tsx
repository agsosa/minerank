import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import CommunityCard from "src/components/common/CommunityCard";
import { selectCommunityState } from "src/state/community";
import { Section, FeaturedTitle, FeaturedGrid, PromoBox } from "../CommunitiesList.styled";

const Featured = () => {
  const { featured } = useSelector(selectCommunityState);

  return (
    <Section>
      <FeaturedTitle>
        <FaStar color="gold" />
        <h2>Servidores de Minecraft destacados</h2>
      </FeaturedTitle>

      <FeaturedGrid>
        {featured.map((community, idx) => (
          <CommunityCard key={idx} community={community} />
        ))}
      </FeaturedGrid>

      <PromoBox>
        ¿Te interesa promocionar tu servidor de Minecraft? Click aquí para más información
      </PromoBox>
    </Section>
  );
};

export default Featured;
