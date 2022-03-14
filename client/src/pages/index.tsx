import type { NextPage } from "next";
import { getCommunities } from "src/state/community";
import { storeWrapper } from "../state/store";
import Home from "src/components/views/Home";

const HomePage: NextPage = () => {
  return <Home />;
};

// Get communities (it will include featured and latest)
export const getStaticProps = storeWrapper.getStaticProps((store) => async (_arg) => {
  const promises = [];

  promises.push(store.dispatch(getCommunities(1)));

  await Promise.allSettled(promises);

  return {
    props: {},
    revalidate: 120,
  };
});

export default HomePage;
