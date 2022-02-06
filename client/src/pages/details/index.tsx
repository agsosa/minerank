import type { NextPage } from "next";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import DetailsLayout from "src/components/details/DetailsLayout";
import LeftColumn from "src/components/details/LeftColumn";
import RightColumn from "src/components/details/RightColumn";

const Details: NextPage = () => {
  return (
    <MainLayout>
      <Header />

      <DetailsLayout>
        <LeftColumn />
        <RightColumn />
      </DetailsLayout>

      <Footer />
    </MainLayout>
  );
};

export default Details;
