import {
  Container,
  AppDescription,
  Disclaimer,
  ColumnsContainer,
  Column,
  FlexContainer,
  Copyright,
  CopyrightContent,
  ContentOverlay,
} from "./Footer.styled";

import Image from "next/image";
import { getAppConfig } from "src/utils/appConfig.utils";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <ContentOverlay />

      <FlexContainer>
        <AppDescription>
          <Image src="/logo1.png" width="160" height="140" />
          <p>
            {getAppConfig().appName} es un directorio de servidores de Minecraft enviados por
            jugadores de la comunidad o sus respectivos dueños. Promociona tu servidor de Minecraft
            en nuestro sitio web para que tu comunidad crezca!
          </p>
        </AppDescription>

        <ColumnsContainer>
          <Column>
            <b>Modos de juego populares</b>
            <p>PVP Survival</p>
            <p>Factions</p>
            <p>Squid Game</p>
            <p>Sky blocks</p>
          </Column>

          <Column>
            <b>Versiones populares</b>
            <p>v1.18</p>
            <p>v1.16</p>
            <p>v1.8.7</p>
            <p>v1.5</p>
          </Column>

          <Column>
            <b>Links importantes</b>
            <p>Agregar servidor</p>
            <p>Promocionar servidor</p>
            <p>Preguntas Frecuentes</p>
            <p>Contacto</p>
          </Column>
        </ColumnsContainer>
      </FlexContainer>

      <Disclaimer>
        Disclaimer: Todos los servidores de Minecraft en este sitio web son registrados por usuarios
        y NO somos responsables por el contenido del mismo. Si crees que hay un problema, por favor
        contáctanos desde la página de contacto. Minecraft es una marca registrada por
        Mojang/Microsoft y no está asociada con este sitio web.
      </Disclaimer>

      <Copyright>
        <CopyrightContent>
          <p>
            {year} (c) {getAppConfig().appName}. Todos los derechos reservados.
          </p>

          <div id="links">
            <p>Política de Privacidad</p>|<p>Términos y Condiciones</p> |
            <p id="links">
              Desarrollado por{" "}
              <a href="https://github.com/agsosa" target="_blank" rel="noreferrer">
                <Image src="/ags.png" width="24" height="24" />
              </a>
            </p>
          </div>
        </CopyrightContent>
      </Copyright>
    </Container>
  );
};

export default Footer;
