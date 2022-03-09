import Image from "next/image";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { FaCircle, FaMousePointer, FaSyncAlt } from "react-icons/fa";

import { formatBigNumber } from "src/utils/misc.utils";
import { selectCommunityState } from "src/state/community";
import { Container, Card, Flex, Stat, SmallStat, IPAddress } from "./LeftColumn.styled";
import { getCommunityConnectionString } from "src/utils/community.utils";

const LeftColumn = () => {
  const { communityDetails } = useSelector(selectCommunityState);

  const { updatedAt } = communityDetails!;
  const updateDate = dayjs(updatedAt).format("DD/MM/YYYY");
  const connectionStr = getCommunityConnectionString(communityDetails!);
  const clicks = formatBigNumber(15555555);

  return (
    <Container>
      <Image src="/cryptosignal-thumb.png" width="318" height="318" />

      <Card>
        <div id="content">
          <Stat>
            <FaCircle color="green" />
            <span>327/1000</span>
          </Stat>

          <IPAddress>
            <span>{connectionStr}</span>
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
