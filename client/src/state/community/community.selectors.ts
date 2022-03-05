import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "src/types/store.types";

export const selectCommunityState = (state: StoreState) => state.community;

export const selectAllCommunities = createSelector(
  selectCommunityState,
  ({ communities, featured, latest }) => {
    const concat = communities.concat(featured).concat(latest);
    const uniques = [...new Set(concat)];
    return uniques;
  }
);

export const selectCommunityByShortName = createSelector(
  [selectAllCommunities, (_state, shortName) => shortName],
  (communities, shortName) => {
    return communities.find((community) => community.shortName === shortName);
  }
);
