import { Container, HeaderContent, Logo } from "./Header.styled";
import Image from "next/image";
import { getAppConfig } from "src/utils/appConfig.utils";

const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <Logo>
          <Image src="/logo1.png" width="28" height="28" />
          <span>{getAppConfig().appName}</span>
        </Logo>
        <p>Promocionar Servidor</p>
        <p>Actions</p>
      </HeaderContent>
    </Container>
  );
};

export default Header;
