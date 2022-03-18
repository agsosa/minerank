import type { NextPage } from "next";
import { getCommunities } from "src/state/community";
import { storeWrapper } from "../state/store";
import Home from "src/components/views/Home";
import { getAppConfig } from "src/services/config.service";
import { getGameModes } from "src/state/gamemode";

const HomePage: NextPage = () => {
  return <Home />;
};

// Get server data
export const getStaticProps = storeWrapper.getStaticProps((store) => async (_arg) => {
  const promises = [
    // Get communities action promise
    store.dispatch(
      getCommunities({
        page: 1,
        limit: getAppConfig().pageSize,
        includeLatest: true,
        separateFeatured: true,
      })
    ),
    // Get gamemodes action promise
    store.dispatch(getGameModes()),
  ];

  await Promise.allSettled(promises);

  return {
    props: {},
    revalidate: 120,
  };
});

export default HomePage;
