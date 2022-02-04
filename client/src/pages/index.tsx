import type { NextPage } from "next";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import Filters from "src/components/home/Filters";
import Hero from "src/components/home/Hero";
import LatestServers from "src/components/home/LatestServers";
import ServerCard from "src/components/home/ServerCard";
import { CONTENT_WIDTH } from "src/utils/style.utils";

import styled from "styled-components";

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 22px;

  ${CONTENT_WIDTH}
`;

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header />
      <Hero />

      <Filters />

      <Cards>
        <ServerCard />
        <ServerCard />
        <ServerCard />
        <ServerCard />
        <ServerCard />
      </Cards>

      <LatestServers />
      <Footer />
    </MainLayout>
  );
};

export default Home;
