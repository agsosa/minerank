import type { NextPage } from "next";
import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import Filters from "src/components/HomePage/Filters";
import Hero from "src/components/HomePage/Hero";
import HomeLayout from "src/components/HomePage/HomeLayout";
import ServersList from "src/components/HomePage/ServersList";
import { fetchCommunities } from "src/services/community.service";
import { ICommunity } from "@shared/types/entities/ICommunity";

type IHomePage = { [key: string]: any };

const HomePage: NextPage<IHomePage> = ({ fallback }) => {
  console.log(fallback);

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

export default HomePage;

export async function getStaticProps() {
  const communities = await fetchCommunities();

  return {
    props: {
      fallback: {
        "/api/public/v1/communities": communities,
      },
    },
  };
}
