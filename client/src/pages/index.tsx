import type { NextPage } from "next";
import { getCommunities } from "src/state/community";
import { storeWrapper } from "../state/store";
import Home from "src/components/views/Home";
import { IFindCommunitiesDto } from "@shared/types/dtos/community.dto";

const HomePage: NextPage = () => {
  return <Home />;
};

// Get communities (it will include featured and latest)
export const getStaticProps = storeWrapper.getStaticProps((store) => async (_arg) => {
  const promises = [];

  const dto: IFindCommunitiesDto = {
    page: 1,
    limit: 10,
    includeLatest: true,
    separateFeatured: true,
  };

  promises.push(store.dispatch(getCommunities(dto)));

  await Promise.allSettled(promises);

  return {
    props: {},
    revalidate: 120,
  };
});

export default HomePage;
