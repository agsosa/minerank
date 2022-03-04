import axios, { Method, AxiosRequestConfig } from "axios";

import { ICommunity } from "@shared/types/entities/ICommunity";
import { IFindAllCommunitiesDto } from "@shared/types/dtos/community.dto";
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
    const params: IFindAllCommunitiesDto = {
      page,
    };

    const options: AxiosRequestConfig = {
      url: fetchCommunities.URL,
      method: fetchCommunities.METHOD,
      params,
    };

    const { data } = await axios(options);
    if (!data) throw new Error("NO_DATA");

    return { data: data as IPaginatedDto<ICommunity> };
  } catch (err) {
    return { error: new ServiceError(err), data: {} as any };
  }
}
