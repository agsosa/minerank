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
import { getAppConfig } from "src/services/config.service";
import Link from "next/link";
import { selectPopularGameModes } from "src/state/gamemode";
import { useAppSelector } from "src/hooks/useAppSelector";
import { selectPopularVersions } from "src/state/version";

const Footer = () => {
  const popularGameModes = useAppSelector((state) => selectPopularGameModes(state, 4));
  const popularVersions = useAppSelector((state) => selectPopularVersions(state, 4));

  const year = new Date().getFullYear();

  const bottomLinks = [
    { label: "Sitemap", url: "/sitemap" },
    { label: "Política de Privacidad", url: "/privacy-policy" },
    { label: "Términos y Condiciones", url: "/terms-and-conditions" },
  ];

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
            {popularGameModes.map(({ id, label }) => (
              <p key={id}>{label}</p>
            ))}
          </Column>

          <Column>
            <b>Versiones populares</b>
            {popularVersions.map(({ id, label }) => (
              <p key={id}>v{label}</p>
            ))}
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
            {bottomLinks.map((elem, idx) => (
              <div key={idx}>
                <Link href={elem.url}>{elem.label}</Link> |
              </div>
            ))}

            <p id="links">
              Desarrollado por{" "}
              <a href="https://github.com/agsosa" target="_blank" rel="noreferrer">
                <Image src="/ags.png" width="22" height="22" />
              </a>
            </p>
          </div>
        </CopyrightContent>
      </Copyright>
    </Container>
  );
};

export default Footer;
