import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommunity } from "@shared/types/entities/ICommunity";
import { ServiceError } from "src/services/internal/ServiceError";
import { LoadingState } from "src/types/service.types";
import { hydrate } from "src/types/store.types";
import { isServerSide } from "src/utils/misc.utils";
import { getCommunityDetails } from ".";
import { getCommunities } from "./community.thunks";

interface ICommunityState {
  featured: ICommunity[];
  latest: ICommunity[];
  communities: ICommunity[];
  communityDetails: ICommunity | null | undefined; // ICommunityDetail with comments etc
  loadingState: LoadingState;
  page: number;
  maxPage: number;
  perPage: number;
  total: number;
  error?: ServiceError | string | null;
}

const initialState = {
  featured: [],
  communities: [],
  latest: [],
  communityDetails: null,
  total: 0,
  maxPage: 0,
  page: 1,
  perPage: 10,
  loadingState: LoadingState.IDLE,
  error: null,
} as ICommunityState;

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, { payload: { community } }) => {
      const error =
        typeof community.error === "string" ? JSON.parse(community.error) : community.error;

      return {
        ...state,
        ...community,
        error,
      };
    });

    builder.addCase(getCommunities.fulfilled, (state, { payload }) => {
      const {
        items: { featured, normal, latest },
        total,
        maxPage,
        page,
        perPage,
      } = payload;

      if (featured.length > 0) state.featured = featured;
      if (latest.length > 0) state.latest = latest;
      state.communities = normal;
      state.loadingState = LoadingState.SUCCESS;
      state.total = total;
      state.maxPage = maxPage;
      state.page = page;
      state.perPage = perPage;
      state.error = null;
    });

    builder.addCase(getCommunityDetails.fulfilled, (state, { payload }) => {
      state.loadingState = LoadingState.SUCCESS;
      state.communityDetails = payload;
      state.error = null;
    });

    // Pending matcher
    builder.addMatcher(
      (action) => [getCommunities.pending, getCommunityDetails.pending].includes(action?.type),
      (state) => {
        state.loadingState = LoadingState.PENDING;
        state.error = null;
      }
    );

    // Rejected matcher
    builder.addMatcher(
      (action) => [getCommunities.rejected, getCommunityDetails.rejected].includes(action?.type),
      (state, { payload }) => {
        state.loadingState = LoadingState.FAILED;
        state.error = isServerSide() ? JSON.stringify(payload) : payload;
      }
    );
  },
});

export const { setPage } = communitySlice.actions;

export const reducer = communitySlice.reducer;
