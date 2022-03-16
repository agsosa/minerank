import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ISearchCommunitiesDto,
  ISearchCommunitiesResponseDto,
  IFindCommunityResponseDto,
} from "@shared/types/dtos/community.dto";
import communityService from "src/services/community.service";
import { IServiceError } from "src/types/service.types";

// Get communities from server by page (excludes featured)
export const getCommunities = createAsyncThunk<
  ISearchCommunitiesResponseDto,
  ISearchCommunitiesDto,
  { rejectValue: IServiceError }
>("getCommunities", async (findCommunitiesDto, thunkAPI) => {
  const { data, error } = await communityService.fetchCommunities(findCommunitiesDto);

  if (error) return thunkAPI.rejectWithValue(error);
  else return data;
});

// Get community details by short name from server
export const getCommunityDetails = createAsyncThunk<
  IFindCommunityResponseDto,
  string,
  { rejectValue: IServiceError }
>("getCommunityDetails", async (shortName, thunkAPI) => {
  const { data, error } = await communityService.fetchCommunity(shortName);

  if (error) return thunkAPI.rejectWithValue(error);
  else return data;
});
