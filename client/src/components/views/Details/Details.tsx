import AppHead from "src/components/common/AppHead";
import BreadCrumbs from "src/components/common/BreadCrumbs";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import { HeaderSafeAreaSpacing } from "src/components/common/Header/Header";
import MainLayout from "src/components/common/MainLayout";
import LeftColumn from "src/components/views/Details/LeftColumn";
import RightColumn from "src/components/views/Details/RightColumn";
import { Container } from "./Details.styled";

const Details = () => {
  // TODO: Reemplazar el appHead title con el nombre del server
  return (
    <MainLayout>
      <AppHead title="Survival Dub - Minerank - Servidores de Minecraft" />

      <Header fixedBackground />
      <HeaderSafeAreaSpacing />

      <BreadCrumbs />

      <Container>
        <LeftColumn />
        <RightColumn />
      </Container>

      <Footer />
    </MainLayout>
  );
};

export default Details;
