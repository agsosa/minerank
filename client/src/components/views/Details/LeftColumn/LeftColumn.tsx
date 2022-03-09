import Image from "next/image";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { FaCircle, FaMousePointer, FaSyncAlt } from "react-icons/fa";

import { formatBigNumber } from "src/utils/misc.utils";
import { selectCommunityState } from "src/state/community";
import { Container, Card, Flex, Stat, SmallStat, IPAddress } from "./LeftColumn.styled";

const LeftColumn = () => {
  const { communityDetails } = useSelector(selectCommunityState);
  if (!communityDetails) throw new Error("Details view entered with no community loaded");

  const { updatedAt } = communityDetails;
  const updateDate = dayjs(updatedAt).format("DD/MM/YYYY");

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
            <span>3mc.cryptosignal.com</span>
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
            <span>{formatBigNumber(15555555)}</span>
          </SmallStat>
        </Flex>
      </Card>
    </Container>
  );
};

export default LeftColumn;
