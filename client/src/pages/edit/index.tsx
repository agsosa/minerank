import type { NextPage } from "next";
import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import DetailsLayout from "src/components/DetailsPage/DetailsLayout";
import LeftColumn from "src/components/DetailsPage/LeftColumn";
import RightColumn from "src/components/DetailsPage/RightColumn";

const EditPage: NextPage = () => {
  return (
    <MainLayout>
      <AppHead title="Agregar servidor - Minerank - Servidores de Minecraft" />

      <Header fixedBackground />

      <DetailsLayout>
        <LeftColumn />
        <RightColumn />
      </DetailsLayout>

      <Footer />
    </MainLayout>
  );
};

export default EditPage;
