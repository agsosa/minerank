import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "src/types/store.types";

export const selectCommunityState = (state: StoreState) => state.community;

// Get all communities (it will also get featured and latest if page = 1)
export const selectAllCommunities = createSelector(
  selectCommunityState,
  ({ communities, featured, latest }) => {
    const concat = communities.concat(featured).concat(latest);
    const uniques = [...new Set(concat)];
    return uniques;
  }
);

// Get a community by shortname
export const selectCommunityByShortName = createSelector(
  [selectAllCommunities, (_state, shortName?: string) => shortName],
  (communities, shortName) => {
    return communities.find((community) => community.shortName === shortName);
  }
);
