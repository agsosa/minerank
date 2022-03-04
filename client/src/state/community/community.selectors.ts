import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "src/types/store.types";

export const selectCommunityState = (state: StoreState) => state.community;
