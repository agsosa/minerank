import { createSlice } from "@reduxjs/toolkit";
import { IVersion } from "@shared/types/entities/IVersion";
import { IServiceError, LoadingState } from "src/types/service.types";
import { hydrateAction } from "src/types/store.types";
import { getVersions } from "./version.thunks";

interface IVersionState {
  versions: IVersion[];
  loadingState: LoadingState;
  error: IServiceError | null;
}

const initialState = {
  versions: [],
  loadingState: LoadingState.IDLE,
  error: null,
} as IVersionState;

const versionSlice = createSlice({
  name: "version",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(hydrateAction, (state, { payload: { version } }) => {
      return {
        ...state,
        ...version,
      };
    });

    builder.addCase(getVersions.fulfilled, (state, { payload }) => {
      state.versions = payload;
      state.loadingState = LoadingState.SUCCESS;
      state.error = null;
    });

    // Pending matcher
    builder.addMatcher(
      (action) => [getVersions.pending].includes(action?.type),
      (state) => {
        state.loadingState = LoadingState.PENDING;
        state.error = null;
      }
    );

    // Rejected matcher
    builder.addMatcher(
      (action) => [getVersions.rejected].includes(action?.type),
      (state, { payload }) => {
        state.loadingState = LoadingState.FAILED;
        state.error = payload;
      }
    );
  },
});

export const reducer = versionSlice.reducer;
