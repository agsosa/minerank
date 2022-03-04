import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import Filters from "src/components/views/Home/Filters";
import Hero from "src/components/views/Home/Hero";
import HomeLayout from "src/components/views/Home/HomeLayout";
import ServersList from "src/components/views/Home/CommunitiesList";

const Home = () => {
  return (
    <MainLayout>
      <AppHead title="Minerank - Los mejores servidores de Minecraft" />

      <Header />
      <Hero />

      <HomeLayout>
        <Filters />
        <ServersList />
      </HomeLayout>

      <Footer />
    </MainLayout>
  );
};

export default Home;
