import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";

import { Container, HeaderContent, Flex, HEADER_HEIGHT, GameModesContainer } from "./Header.styled";
import AppLogo from "../AppLogo";
import { selectGameModeState } from "src/state/gamemode";

interface HeaderProps {
  fixedBackground?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fixedBackground, ...props }) => {
  const { gamemodes } = useSelector(selectGameModeState);
  const [anchorGameModes, setAnchorGameModes] = useState<null | HTMLElement>(null);
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleGameModesClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorGameModes(event.currentTarget);
  };

  const handleGameModesClose = () => {
    setAnchorGameModes(null);
  };

  return (
    <Container fixedBackground={fixedBackground} {...props}>
      <HeaderContent>
        <AppLogo />
        
        <Flex>
          <p onClick={handleGameModesClick}>Modos de Juego</p>
          <p>FAQ</p>
          <p>Blog</p>
          <p>Promocionar</p>
          <p>Agregar Servidor</p>
          <a href="/api/auth/login">Login</a>
          <a href="/api/auth/logout">Logout</a>
          {user && <h2>{user.email}</h2>}
        </Flex>
      </HeaderContent>

      {/* GameModes menu */}
      <Menu
        anchorEl={anchorGameModes}
        open={Boolean(anchorGameModes)}
        onClose={handleGameModesClose}
        onClick={handleGameModesClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <GameModesContainer>
          {gamemodes.map((elem) => (
            <MenuItem key={elem.id}>{elem.label_es}</MenuItem>
          ))}
        </GameModesContainer>
      </Menu>
    </Container>
  );
};

export const HeaderSafeAreaSpacing = () => {
  return <div style={{ height: HEADER_HEIGHT }} />;
};

export default Header;
