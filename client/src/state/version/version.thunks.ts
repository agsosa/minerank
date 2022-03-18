import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFindVersionsResponseDto } from "@shared/types/dtos/version.dto";
import versionService from "src/services/version.service";
import { IServiceError } from "src/types/service.types";

// Get versions from server
export const getVersions = createAsyncThunk<
  IFindVersionsResponseDto,
  undefined,
  { rejectValue: IServiceError }
>("getVersions", async (_, thunkAPI) => {
  const { data, error } = await versionService.fetchVersions();

  if (error) return thunkAPI.rejectWithValue(error);
  else return data;
});
