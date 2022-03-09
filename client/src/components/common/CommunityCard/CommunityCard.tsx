import { FaUserAlt, FaCircle, FaArrowUp, FaTags, FaShieldAlt } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { useRouter } from "next/router";

import {
  Container,
  Image,
  InfoContainer,
  Name,
  StatsContainer,
  Stat,
  NameContainer,
  TitleContainer,
  Tags,
  FeaturedText,
} from "./CommunityCard.styled";
import { ICommunity } from "@shared/types/entities/ICommunity";
import {
  getCommunityConnectionString,
  getCommunityCountryFlagComponent,
} from "src/utils/community.utils";
import { formatBigNumber } from "src/utils/misc.utils";

// TODO: On mouse hover open description resume
interface CommunityCardProps {
  community: ICommunity;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community, ...props }) => {
  const router = useRouter();

  const { isFeatured, name, upvotes, premiumType, shortName } = community;
  const totalVotes = formatBigNumber(upvotes);
  const Flag = getCommunityCountryFlagComponent(community);
  const connectionStr = getCommunityConnectionString(community);

  const handleClick = () => {
    router.push(`/server/${shortName}`);
  };

  return (
    <Container isFeatured={isFeatured} {...props} onClick={handleClick}>
      {isFeatured && <FeaturedText>DESTACADO</FeaturedText>}
      <Image src="/cryptosignal-thumb.png" height="80" width="80" />
      <InfoContainer>
        <TitleContainer>
          <NameContainer>
            {Flag && <Flag />}
            <Name>{name}</Name>
          </NameContainer>
          <Stat>
            <FaArrowUp /> <span>{totalVotes}</span>
          </Stat>
        </TitleContainer>

        <StatsContainer>
          <Stat>
            <FaCircle style={{ color: "green" }} />
            <span>{connectionStr}</span>
          </Stat>
        </StatsContainer>

        <StatsContainer>
          <Stat>
            <FaShieldAlt /> <span>{premiumType}</span>
          </Stat>
          <Stat>
            <BiGitBranch /> <span>1.18 - 1.20</span>
          </Stat>
          <Stat>
            <FaUserAlt /> <span>200/1000</span>
          </Stat>
        </StatsContainer>

        <StatsContainer>
          <Stat>
            <FaTags />
            <Tags>Roleplay, Survival PVP, Juegos del Hambre, Factions, Squid Game</Tags>
          </Stat>
        </StatsContainer>
      </InfoContainer>
    </Container>
  );
};

export default CommunityCard;
