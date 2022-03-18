import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "src/types/store.types";

export const selectVersionState = (state: StoreState) => state.version;

export const selectVersions = (state: StoreState) => state.version.versions;

export const selectPopularVersions = createSelector(
  [selectVersions, (_state, limit: number) => limit],
  (versions, limit) => {
    return Array.from(versions)
      .sort((a, b) => b.communityCount - a.communityCount)
      .slice(0, limit);
  }
);
