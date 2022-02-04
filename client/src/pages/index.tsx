import type { NextPage } from "next";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import Hero from "src/components/home/Hero";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header />
      <Hero />
      <p>hola</p>
      <Footer />
    </MainLayout>
  );
};

export default Home;
