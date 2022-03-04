import axios, { Method } from "axios";

import { ICommunity } from "@shared/types/entities/ICommunity";
import { AsyncServiceResponse } from "src/types/service.types";
import { getAppConfig } from "./config.service";
import { ServiceError } from "./ServiceError";

fetchCommunities.URL = `${getAppConfig().appHomeUrl}/api/public/v1/communities`;
fetchCommunities.METHOD = "GET" as Method;
fetchCommunities.REQUIRES_AUTH = false;
export async function fetchCommunities(page: number = 1): AsyncServiceResponse<ICommunity[]> {
  try {
    const result = await axios({
      url: fetchCommunities.URL,
      method: fetchCommunities.METHOD,
      params: {
        page,
      },
    });

    return { data: result.data as ICommunity[] };
  } catch (err) {
    return { error: new ServiceError(err) };
  }
}
