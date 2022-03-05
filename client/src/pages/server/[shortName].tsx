import type { NextPage } from "next";
import Details from "src/components/views/Details";
import { selectCommunityByShortName } from "src/state/community";
import { storeWrapper } from "src/state/store";

const DetailsPage: NextPage = () => {
  return <Details />;
};

export async function getStaticPaths() {
  return {
    paths: ["/server/pepe"],
    fallback: "blocking",
  };
}

export const getStaticProps = storeWrapper.getStaticProps((store) => async ({ params }) => {
  const shortName = params?.shortName;
  const community = selectCommunityByShortName(store.getState(), shortName);

  if (!community) {
    console.log(`no community with short name ${"pepe"} in state`);
    // fetch details because the community isn't in state
  }

  return {
    props: {},
    revalidate: 120,
  };
});

export default DetailsPage;
