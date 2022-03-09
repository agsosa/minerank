import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import LeftColumn from "src/components/views/Details/LeftColumn";
import RightColumn from "src/components/views/Details/RightColumn";
import { Container } from "./Details.styled";

const Details = () => {
  return (
    <MainLayout>
      <AppHead title="Servidor Survival Dub - Minerank - Servidores de Minecraft" />

      <Header fixedBackground />

      <Container>
        <LeftColumn />
        <RightColumn />
      </Container>

      <Footer />
    </MainLayout>
  );
};

export default Details;
