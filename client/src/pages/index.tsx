import type { NextPage } from "next";
import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import Filters from "src/components/home/Filters";
import Hero from "src/components/home/Hero";
import HomeLayout from "src/components/home/HomeLayout";
import ServersList from "src/components/home/ServersList";

const Home: NextPage = () => {
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
