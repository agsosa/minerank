import type { NextPage } from "next";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import MainLayout from "src/components/common/MainLayout";
import Hero from "src/components/home/Hero";
import LatestServers from "src/components/home/LatestServers";
import ServerCard from "src/components/home/ServerCard";

import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header />
      <Hero />
      <p>hola</p>

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
