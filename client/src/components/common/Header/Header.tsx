import { Container, HeaderContent, Logo, Flex } from "./Header.styled";
import Image from "next/image";
import { getAppConfig } from "src/utils/appConfig.utils";

interface HeaderProps {
  fixedBackground?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fixedBackground, ...props }) => {
  return (
    <Container fixedBackground={fixedBackground} {...props}>
      <HeaderContent>
        <Logo>
          <Image src="/logo1.png" width="28" height="28" />
          <span>{getAppConfig().appName}</span>
        </Logo>
        <Flex>
          <p>Modos de Juego</p>
          <p>FAQ</p>
          <p>Blog</p>
          <p>Promocionar</p>
          <p>Agregar Servidor</p>
        </Flex>
      </HeaderContent>
    </Container>
  );
};

export default Header;
