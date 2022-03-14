import type { NextPage } from "next";
import Details from "src/components/views/Details";
import communityService from "src/services/community.service";
import { getCommunityDetails } from "src/state/community";
import { storeWrapper } from "src/state/store";

const DetailsPage: NextPage = () => {
  return <Details />;
};

// Build path for every community by shortName
export async function getStaticPaths() {
  // TODO: Check inactive community cases
  const { data } = await communityService.fetchShortNames();

  const buildParams = (shortName: string) => ({
    params: {
      shortName,
    },
  });

  const paths = Array.isArray(data) ? data.map(buildParams) : [];

  return {
    paths,
    fallback: "blocking",
  };
}

// Get community details for the given shortName
export const getStaticProps = storeWrapper.getStaticProps((store) => async ({ params }) => {
  const notFoundResult = {
    props: {},
    notFound: true,
  };

  const shortName = params?.shortName as string;
  if (!shortName) return notFoundResult;

  const result = await store.dispatch(getCommunityDetails(shortName));
  if (!result.payload) return notFoundResult;

  return {
    props: {},
    revalidate: 120,
  };
});

export default DetailsPage;
