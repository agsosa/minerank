import {
  Container,
  AppDescription,
  Disclaimer,
  ColumnsContainer,
  Column,
  FlexContainer,
  Copyright,
  CopyrightContent,
} from "./Footer.styled";

const Footer = () => {
  return (
    <Container>
      <FlexContainer>
        <AppDescription>
          <b>LOGO</b>
          <p>
            telegramChannels.me is a list of Telegram Channels, Groups and Bots that submitted by
            the Telegram users. This site is not affiliated with Telegram.
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
            <b>About</b>
            <p>Telegram Channels</p>
            <p>Telegram Groups</p>
            <p>Telegram Bots</p>
            <p>Telegram Stickers</p>
          </Column>
        </ColumnsContainer>
      </FlexContainer>

      <Disclaimer>
        Disclaimer: All Channels, Groups, Bots, and Stickers are added by users and we are NOT
        responsible for the content on their media. We are trying to approve useful and clean
        channels. If you think there is an issue, please contact us from Contact Us page
      </Disclaimer>

      <Copyright>
        <CopyrightContent>
          <p>2022 C Telegram Channels. All rights reserved.</p>

          <div id="links">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </CopyrightContent>
      </Copyright>
    </Container>
  );
};

export default Footer;
