import { AxiosRequestConfig } from "axios";
import axios from "src/utils/axios.utils";

import { ICommunity } from "@shared/types/entities/ICommunity";
import { IFindAllCommunitiesDto, ISearchCommunityDto } from "@shared/types/dtos/community.dto";
import { IPaginatedDto } from "@shared/types/dtos/paginated.dto";
import { AsyncServiceResponse } from "src/types/service.types";
import ServiceMethod from "./internal/ServiceMethod";

class CommunityService {
  @ServiceMethod()
  async fetchCommunities(page: number = 1): AsyncServiceResponse<IPaginatedDto<ICommunity>> {
    const params: IFindAllCommunitiesDto = {
      page,
    };

    const options: AxiosRequestConfig = {
      url: `/api/public/v1/communities`,
      method: "GET",
      params,
    };

    const { data } = await axios(options);

    return { data: data as IPaginatedDto<ICommunity> };
  }

  @ServiceMethod()
  async fetchFeaturedCommunities(): AsyncServiceResponse<ICommunity[]> {
    const params: Partial<ISearchCommunityDto> = {
      isFeatured: true,
    };

    const options: AxiosRequestConfig = {
      url: `/api/public/v1/communities/search`,
      method: "POST",
      params,
    };

    const { data } = await axios(options);

    return { data: data as ICommunity[] };
  }

  @ServiceMethod()
  async fetchShortNames(): AsyncServiceResponse<string[]> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/communities/shortnames`,
      method: "GET",
    };

    const { data } = await axios(options);

    return { data: data as string[] };
  }

  @ServiceMethod()
  async fetchCommunity(shortName: string): AsyncServiceResponse<string[]> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/communities/${shortName}`,
      method: "GET",
    };

    const { data } = await axios(options);

    return { data: data as string[] };
  }
}

export default new CommunityService();
