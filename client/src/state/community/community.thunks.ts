import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFindCommunitiesResponseDto } from "@shared/types/dtos/community.dto";
import communityService from "src/services/community.service";
import { ServiceError } from "src/services/internal/ServiceError";

// Get communities from server by page (excludes featured)
export const getCommunities = createAsyncThunk<
  IFindCommunitiesResponseDto,
  number,
  { rejectValue: ServiceError }
>("getCommunities", async (page, thunkAPI) => {
  const { data, error } = await communityService.fetchCommunities(page);

  if (error) return thunkAPI.rejectWithValue(error);
  else return data;
});
