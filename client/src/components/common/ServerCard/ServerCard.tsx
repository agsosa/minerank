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
} from "./ServerCard.styled";
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

// TODO: On mouse hover open description resume

const ServerCard = () => {
  return (
    <Container>
      <Image src="/cryptosignal-thumb.png" height="85" width="85" />
      <InfoContainer>
        <TitleContainer>
          <NameContainer>
            <ES />
            <Name>Survival Rolemine Network 2</Name>
          </NameContainer>
          <Stat>
            <FaArrowUp /> <span>52131</span>
          </Stat>
        </TitleContainer>

        <StatsContainer>
          <Stat>
            <FaCircle style={{ color: "green" }} />
            <span>mc.survivaldub.es</span>
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

export default ServerCard;
