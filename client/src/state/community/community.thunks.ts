import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPaginatedDto } from "@shared/types/dtos/paginated.dto";
import { ICommunity } from "@shared/types/entities/ICommunity";
import communityService from "src/services/community.service";
import { ServiceError } from "src/services/ServiceError";

// Get communities from server by page (excludes featured)
export const getCommunities = createAsyncThunk<
  IPaginatedDto<ICommunity>,
  number,
  { rejectValue: ServiceError }
>("getCommunities", async (page, thunkAPI) => {
  const { data, error } = await communityService.fetchCommunities(page);

  if (error) return thunkAPI.rejectWithValue(error);
  else return data;
});
