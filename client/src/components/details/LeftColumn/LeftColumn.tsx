import { Container } from "./LeftColumn.styled";
import Image from "next/image";
import { Button } from "@mui/material";
import { FaAd, FaCopy } from "react-icons/fa";
const LeftColumn = () => {
  return (
    <Container>
      <Image src="/cryptosignal-thumb.png" width="318" height="318" />
      <p>Online</p>
      <p>327/1000</p>
      <p>mc.cryptosignal.com</p>

      <p>Ultima actualizacion</p>
      <p>Hits totales</p>
    </Container>
  );
};

export default LeftColumn;
