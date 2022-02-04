import type { NextPage } from "next";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header />
      <p>hola</p>
      <Footer />
    </MainLayout>
  );
};

export default Home;
