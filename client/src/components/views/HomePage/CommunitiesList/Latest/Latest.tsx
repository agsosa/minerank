import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import Carousel from "src/components/common/Carousel";
import CommunityCard from "src/components/common/CommunityCard";
import { selectCommunityState } from "src/state/community";
import { Section, FeaturedTitle } from "../CommunitiesList.styled";

const Latest = () => {
  const { latest } = useSelector(selectCommunityState);

  return (
    <Section>
      <FeaturedTitle>
        <FaPlus />
        <h2>Últimos servidores de Minecraft agregados</h2>
      </FeaturedTitle>
      <Carousel>
        {latest.map((community, idx) => (
          <CommunityCard community={community} key={idx} />
        ))}
      </Carousel>
    </Section>
  );
};

export default Latest;
