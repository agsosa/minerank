import { Container, HeaderContent, Flex, HEADER_HEIGHT } from "./Header.styled";
import { useUser } from "@auth0/nextjs-auth0";
import AppLogo from "../AppLogo";

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
        <AppLogo />
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

export const HeaderSafeAreaSpacing = () => {
  return <div style={{ height: HEADER_HEIGHT }} />;
};

export default Header;
