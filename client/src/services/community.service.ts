import axios, { Method } from "axios";

import { ICommunity } from "@shared/types/entities/ICommunity";
import { IPaginatedDto } from "@shared/types/dtos/paginated.dto";
import { AsyncServiceResponse } from "src/types/service.types";
import { getAppConfig } from "./config.service";
import { ServiceError } from "./ServiceError";

fetchCommunities.URL = `${getAppConfig().appHomeUrl}/api/public/v1/communities`;
fetchCommunities.METHOD = "GET" as Method;
fetchCommunities.REQUIRES_AUTH = false;
export async function fetchCommunities(
  page: number = 1
): AsyncServiceResponse<IPaginatedDto<ICommunity>> {
  try {
    const { data } = await axios({
      url: fetchCommunities.URL,
      method: fetchCommunities.METHOD,
      params: {
        page,
      },
    });

    if (!data) throw new Error("NO_DATA");

    return { data };
  } catch (err) {
    return { error: new ServiceError(err), data: {} as any };
  }
}
