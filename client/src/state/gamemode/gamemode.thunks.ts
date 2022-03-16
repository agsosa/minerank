import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFindGameModesResponseDto } from "@shared/types/dtos/gamemode.dto";
import gamemodeService from "src/services/gamemode.service";
import { IServiceError } from "src/types/service.types";

// Get gamemodes from server
export const getGameModes = createAsyncThunk<
  IFindGameModesResponseDto,
  null,
  { rejectValue: IServiceError }
>("getGameModes", async (_, thunkAPI) => {
  const { data, error } = await gamemodeService.fetchGameModes();

  if (error) return thunkAPI.rejectWithValue(error);
  else return data;
});
