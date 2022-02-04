import type { NextPage } from "next";
import Footer from "src/components/common/Footer";
import styled from "styled-components";

const Test = styled.p`
  color: red;
  font-size: 30px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Test>hola</Test>
      <Footer />
    </div>
  );
};

export default Home;
