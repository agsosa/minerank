import type { NextPage } from "next";
import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import DetailsLayout from "src/components/DetailsPage/DetailsLayout";
import LeftColumn from "src/components/DetailsPage/LeftColumn";
import RightColumn from "src/components/DetailsPage/RightColumn";

const DetailsPage: NextPage = () => {
  return (
    <MainLayout>
      <AppHead title="Servidor Survival Dub - Minerank - Servidores de Minecraft" />

      <Header fixedBackground />

      <DetailsLayout>
        <LeftColumn />
        <RightColumn />
      </DetailsLayout>

      <Footer />
    </MainLayout>
  );
};

export default DetailsPage;
