import type { NextPage } from "next";
import { getCommunities } from "src/state/community";
import { storeWrapper } from "../state/store";
import Home from "src/components/views/Home";

const HomePage: NextPage = () => {
  return <Home />;
};

export const getStaticProps = storeWrapper.getStaticProps((store) => async (_arg) => {
  await store.dispatch(getCommunities(1));

  return {
    props: {},
    revalidate: 120,
  };
});

export default HomePage;
