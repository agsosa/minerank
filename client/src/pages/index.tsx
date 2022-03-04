import type { NextPage } from "next";
import AppHead from "src/components/common/AppHead";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import Filters from "src/components/views/HomePage/Filters";
import Hero from "src/components/views/HomePage/Hero";
import HomeLayout from "src/components/views/HomePage/HomeLayout";
import ServersList from "src/components/views/HomePage/CommunitiesList";
import { getCommunities } from "src/state/community";
import { storeWrapper } from "../state/store";

const HomePage: NextPage = () => {
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

export const getStaticProps = storeWrapper.getStaticProps((store) => async (_arg) => {
  const result = await store.dispatch(getCommunities(1));

  return {
    props: {},
    revalidate: 120,
  };
});
