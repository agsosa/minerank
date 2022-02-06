import { Container, Card, Flex, Stat, SmallStat, IPAddress } from "./LeftColumn.styled";
import Image from "next/image";
import { Button } from "@mui/material";
import {
  FaAd,
  FaAddressCard,
  FaCircle,
  FaCopy,
  FaGlobeAmericas,
  FaMousePointer,
  FaSyncAlt,
  FaUser,
} from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";

const LeftColumn = () => {
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
            <span>14/11/2021</span>
          </SmallStat>

          <SmallStat>
            <FaMousePointer />
            <span>1500</span>
          </SmallStat>
        </Flex>
      </Card>
    </Container>
  );
};

export default LeftColumn;
