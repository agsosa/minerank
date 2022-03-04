import type { NextPage } from "next";
import { useEffect } from "react";
import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import Filters from "src/components/views/HomePage/Filters";
import Hero from "src/components/views/HomePage/Hero";
import HomeLayout from "src/components/views/HomePage/HomeLayout";
import ServersList from "src/components/views/HomePage/ServersList";
import { useCommunities } from "src/hooks/useCommunities";
import { fetchCommunities } from "src/services/community.service";

type IHomePage = {
  initialData: {
    communities: ICommunity[];
  };
};

const HomePage: NextPage<IHomePage> = ({ initialData }) => {
  const { initialize } = useCommunities();

  useEffect(() => {
    console.log("initialData", initialData);
  }, [initialData]);

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
        "/api/public/v1/communities": communities || null,
      },
    },
  };
}
