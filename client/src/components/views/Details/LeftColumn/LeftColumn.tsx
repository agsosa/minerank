import Image from "next/image";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { FaCircle, FaMousePointer, FaSyncAlt } from "react-icons/fa";

import { formatBigNumber } from "src/utils/misc.utils";
import { selectCommunityState } from "src/state/community";
import { Container, Card, Flex, Stat, SmallStat, IPAddress } from "./LeftColumn.styled";
import { getCommunityConnectionString, getCommunityImageUrl, getCommunityServerStatusColor } from "src/utils/community.utils";

const LeftColumn = () => {
  const { communityDetails } = useSelector(selectCommunityState);
  if (!communityDetails) throw new Error("Community details not found");

  const { updatedAt, players, maxPlayers } = communityDetails;
  const updateDate = dayjs(updatedAt).format("DD/MM/YYYY");
  const connectionStr = getCommunityConnectionString(communityDetails);
  const imageUrl = getCommunityImageUrl(communityDetails);
  const statusColor = getCommunityServerStatusColor(communityDetails);
  const clicks = formatBigNumber(15555555);

  return (
    <Container>
      <Image src={imageUrl} width="318" height="318" />

      <Card>
        <div id="content">
          <Stat>
            <FaCircle color={statusColor} />
            <span>{players}/{maxPlayers}</span>
          </Stat>

          <IPAddress>
            <span>{connectionStr}</span>
            {/* TODO: Add click to copy & label "IP Address" below & tooltip */}
          </IPAddress>
        </div>
      </Card>

      <Card id="with-margin">
        <Flex id="content">
          <SmallStat>
            <FaSyncAlt />
            <span>{updateDate}</span>
          </SmallStat>

          <SmallStat>
            <FaMousePointer />
            <span>{clicks}</span>
          </SmallStat>
        </Flex>
      </Card>
    </Container>
  );
};

export default LeftColumn;
