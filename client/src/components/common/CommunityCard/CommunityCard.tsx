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
import { IListCommunity } from "@shared/types/entities/ICommunity";
import {
  getCommunityConnectionString,
  getCommunityCountryFlagComponent,
  getCommunityGameModesString,
  getCommunityVersionsString,
} from "src/utils/community.utils";
import { formatBigNumber } from "src/utils/misc.utils";

// TODO: On mouse hover open description resume
interface CommunityCardProps {
  community: IListCommunity;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community, ...props }) => {
  const router = useRouter();

  const { isFeatured, name, upvotes, premiumType, shortName, players, maxPlayers, serverStatus } =
    community;
  const statusColor = serverStatus ? "green" : "red";
  const totalVotes = formatBigNumber(upvotes);
  const Flag = getCommunityCountryFlagComponent(community);
  const connectionStr = getCommunityConnectionString(community);
  const gamemodesStr = getCommunityGameModesString(community);
  const versionsStr = getCommunityVersionsString(community);

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
            <FaCircle style={{ color: statusColor }} />
            <span>{connectionStr}</span>
          </Stat>
        </StatsContainer>

        <StatsContainer>
          <Stat>
            <FaShieldAlt /> <span>{premiumType}</span>
          </Stat>
          <Stat>
            <BiGitBranch /> <span>{versionsStr}</span>
          </Stat>
          <Stat>
            <FaUserAlt />{" "}
            <span>
              {players}/{maxPlayers}
            </span>
          </Stat>
        </StatsContainer>

        <StatsContainer>
          <Stat>
            <FaTags />
            <Tags>{gamemodesStr}</Tags>
          </Stat>
        </StatsContainer>
      </InfoContainer>
    </Container>
  );
};

export default CommunityCard;
