import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import DetailsLayout from "src/components/views/Details/DetailsLayout";
import LeftColumn from "src/components/views/Details/LeftColumn";
import RightColumn from "src/components/views/Details/RightColumn";

const Details = () => {
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
