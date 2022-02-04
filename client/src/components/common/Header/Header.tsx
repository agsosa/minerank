import { Container, HeaderContent, Logo } from "./Header.styled";
import Image from "next/image";

const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <Logo>
          <Image src="/logo1.png" width="28" height="28" />
          <span>MCRank</span>
        </Logo>
        <p>Promocionar Servidor</p>
        <p>Actions</p>
      </HeaderContent>
    </Container>
  );
};

export default Header;
