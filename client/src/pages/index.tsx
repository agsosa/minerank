import type { NextPage } from "next";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import Filters from "src/components/home/Filters";
import Hero from "src/components/home/Hero";
import HomeLayout from "src/components/home/HomeLayout";
import LatestServers from "src/components/home/LatestServers";
import ServersList from "src/components/home/ServersList";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header />

      <Hero />

      <HomeLayout>
        <Filters />
        <ServersList />
        <LatestServers />
      </HomeLayout>

      <Footer />
    </MainLayout>
  );
};

export default Home;
