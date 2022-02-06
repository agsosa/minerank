import type { NextPage } from "next";
import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import DetailsLayout from "src/components/details/DetailsLayout";
import LeftColumn from "src/components/details/LeftColumn";
import RightColumn from "src/components/details/RightColumn";

const Details: NextPage = () => {
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

export default Details;
