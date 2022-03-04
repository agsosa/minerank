import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICommunity } from "@shared/types/entities/ICommunity";
import { fetchCommunities } from "src/services/community.service";
import { ServiceError } from "src/services/ServiceError";

export const getCommunities = createAsyncThunk<ICommunity[], number, { rejectValue: ServiceError }>(
  "auth/authenticateMiddleware",
  async (page, thunkAPI) => {
    const { data, error } = await fetchCommunities(page);

    if (error) return thunkAPI.rejectWithValue(error);
    else return data;
  }
);
