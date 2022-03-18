import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "src/types/store.types";

export const selectGameModeState = (state: StoreState) => state.gamemode;

export const selectGameModes = (state: StoreState) => state.gamemode.gamemodes;

export const selectPopularGameModes = createSelector(
  [selectGameModes, (_state, limit: number) => limit],
  (gamemodes, limit) => {
    return Array.from(gamemodes)
      .sort((a, b) => b.communityCount - a.communityCount)
      .slice(0, limit);
  }
);
