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
  CopyIP,
  FeaturedText,
} from "./CommunityCard.styled";
import {
  FaUserAlt,
  FaCircle,
  FaArrowUp,
  FaTags,
  FaShieldAlt,
  //BiGitBranch,
} from "react-icons/fa";
import { ES } from "country-flag-icons/react/3x2";

import { BiGitBranch } from "react-icons/bi";
import { ICommunity } from "@shared/types/entities/ICommunity";
import { IEntityBase } from '@shared/types/entities/IEntityBase'

// TODO: On mouse hover open description resume
interface CommunityCardProps {
  community: ICommunity;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community, ...props }) => {
  const { isFeatured, name, ip, upvotes, id} = community;

  return (
    <Container isFeatured={isFeatured} {...props}>
      {isFeatured && <FeaturedText>DESTACADO</FeaturedText>}
      <Image src="/cryptosignal-thumb.png" height="80" width="80" />
      <InfoContainer>
        <TitleContainer>
          <NameContainer>
            <ES />
            <Name>{name}</Name>
          </NameContainer>
          <Stat>
            <FaArrowUp /> <span>{upvotes}</span>
          </Stat>
        </TitleContainer>

        <StatsContainer>
          <Stat>
            <FaCircle style={{ color: "green" }} />
            <span>{ip}</span>
          </Stat>
        </StatsContainer>

        <StatsContainer>
          <Stat>
            <FaShieldAlt /> <span>NO Premium</span>
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
