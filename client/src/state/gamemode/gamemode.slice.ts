import { createSlice } from "@reduxjs/toolkit";
import { IGameMode } from "@shared/types/entities/IGameMode";
import { IServiceError, LoadingState } from "src/types/service.types";
import { hydrate } from "src/types/store.types";
import { getGameModes } from "./gamemode.thunks";

interface IGameModeState {
  gamemodes: IGameMode[];
  loadingState: LoadingState;
  error: IServiceError | null;
}

const initialState = {
  gamemodes: [],
  loadingState: LoadingState.IDLE,
  error: null,
} as IGameModeState;

const gamemodeSlice = createSlice({
  name: "gamemode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, { payload: { gamemode } }) => {
      return {
        ...state,
        ...gamemode,
      };
    });

    builder.addCase(getGameModes.fulfilled, (state, { payload }) => {
      state.gamemodes = payload;
      state.loadingState = LoadingState.SUCCESS;
      state.error = null;
    });

    // Pending matcher
    builder.addMatcher(
      (action) => [getGameModes.pending].includes(action?.type),
      (state) => {
        state.loadingState = LoadingState.PENDING;
        state.error = null;
      }
    );

    // Rejected matcher
    builder.addMatcher(
      (action) => [getGameModes.rejected].includes(action?.type),
      (state, { payload }) => {
        state.loadingState = LoadingState.FAILED;
        state.error = payload;
      }
    );
  },
});

export const reducer = gamemodeSlice.reducer;
