import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommunity } from "@shared/types/entities/ICommunity";
import { ServiceError } from "src/services/ServiceError";
import { LoadingState } from "src/types/service.types";
import { getCommunities } from "./community.thunks";

interface ICommunityState {
  featured: ICommunity[];
  communities: ICommunity[];
  loadingState: LoadingState;
  error?: ServiceError | null;
}

const initialState = {
  featured: [],
  communities: [],
  loadingState: LoadingState.IDLE,
  error: null,
} as ICommunityState;

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setCommunities: (state, action: PayloadAction<ICommunity[]>) => {
      state.communities = action.payload;
    },
    setFeatured: (state, action: PayloadAction<ICommunity[]>) => {
      state.featured = action.payload;
    },
    setLoadingState: (state, action: PayloadAction<LoadingState>) => {
      state.loadingState = action.payload;
    },
    setError: (state, action: PayloadAction<ServiceError>) => {
      state.error = action.payload;
    },
    reset: (state) => {
      state.communities = [];
      state.featured = [];
      state.loadingState = LoadingState.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCommunities.fulfilled, (state, { payload }) => {
      state.loadingState = LoadingState.SUCCESS;
      state.communities = payload;
      state.error = null;
    });

    builder.addCase(getCommunities.pending, (state) => {
      state.loadingState = LoadingState.PENDING;
      state.error = null;
    });

    builder.addCase(getCommunities.rejected, (state, { payload }) => {
      state.loadingState = LoadingState.FAILED;
      state.error = payload;
    });
  },
});

export const { setCommunities, setFeatured, setLoadingState, setError, reset } =
  communitySlice.actions;

export const reducer = communitySlice.reducer;
