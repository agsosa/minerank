import type { NextPage } from "next";
import Details from "src/components/views/Details";
import communityService from "src/services/community.service";
import { getCommunityDetails } from "src/state/community";
import { storeWrapper } from "src/state/store";

const DetailsPage: NextPage = () => {
  return <Details />;
};

export async function getStaticPaths() {
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

export const getStaticProps = storeWrapper.getStaticProps((store) => async ({ params }) => {
  const shortName = params?.shortName as string;
  if (!shortName)
    return {
      props: {},
      notFound: true,
    };

  const result = await store.dispatch(getCommunityDetails(shortName));
  if (!result.payload)
    return {
      props: {},
      notFound: true,
    };

  return {
    props: {},
    revalidate: 120,
  };
});

export default DetailsPage;
