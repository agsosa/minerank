import { Container, HeaderContent, Logo, Flex } from "./Header.styled";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { getAppConfig } from "src/services/config.service";

interface HeaderProps {
  fixedBackground?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fixedBackground, ...props }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
          <a href="/api/auth/login">Login</a>
          <a href="/api/auth/logout">Logout</a>
          {user && <h2>{user.email}</h2>}
        </Flex>
      </HeaderContent>
    </Container>
  );
};

export default Header;
