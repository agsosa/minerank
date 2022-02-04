import type { NextPage } from "next";
import Footer from "src/components/common/Footer";
import MainLayout from "src/components/common/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <p>hola</p>
      <Footer />
    </MainLayout>
  );
};

export default Home;
