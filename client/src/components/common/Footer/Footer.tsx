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
            <b>Top Media</b>
            <p>Telegram Channels</p>
            <p>Telegram Groups</p>
            <p>Telegram Bots</p>
            <p>Telegram Stickers</p>
          </Column>

          <Column>
            <b>Links</b>
            <p>Telegram Channels</p>
            <p>Telegram Groups</p>
            <p>Telegram Bots</p>
            <p>Telegram Stickers</p>
          </Column>

          <Column>
            <b>Links</b>
            <p>Agregar servidor</p>
            <p>Promocionar servidor</p>
            <p>Preguntas Frecuentes</p>
            <p>Contáctanos</p>
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
            <p>Política de Privacidad</p>|<p>Términos y Condiciones de Servicio</p>
          </div>
        </CopyrightContent>
      </Copyright>
    </Container>
  );
};

export default Footer;
