import type { NextPage } from "next";
import { getCommunities } from "src/state/community";
import { storeWrapper } from "../state/store";
import Home from "src/components/views/Home";
import { ISearchCommunitiesDto } from "@shared/types/dtos/community.dto";
import { getAppConfig } from "src/services/config.service";

const HomePage: NextPage = () => {
  return <Home />;
};

// Get communities (it will include featured and latest)
export const getStaticProps = storeWrapper.getStaticProps((store) => async (_arg) => {
  const promises = [];

  promises.push(
    store.dispatch(
      getCommunities({
        page: 1,
        limit: getAppConfig().pageSize,
        includeLatest: true,
        separateFeatured: true,
      })
    )
  );

  await Promise.allSettled(promises);

  return {
    props: {},
    revalidate: 120,
  };
});

export default HomePage;
