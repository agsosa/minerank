import { AxiosRequestConfig } from "axios";
import axios from "src/utils/axios.utils";

import {
  IFindAllCommunitiesResponseDto,
  ISearchCommunitiesDto,
  ISearchCommunitiesResponseDto,
  IFindCommunityResponseDto,
} from "@shared/types/dtos/community.dto";
import { AsyncServiceResponse } from "src/types/service.types";
import ServiceMethod from "./internal/ServiceMethod";
import { IFindShortNamesResponseDto } from "@shared/types/dtos/community.dto";

class CommunityService {
  @ServiceMethod()
  async fetchCommunities(
    findCommunitiesDto: ISearchCommunitiesDto
  ): AsyncServiceResponse<ISearchCommunitiesResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/communities/search`,
      method: "POST",
      data: findCommunitiesDto,
    };

    const { data } = await axios(options);

    return { data };
  }

  @ServiceMethod()
  async fetchShortNames(): AsyncServiceResponse<IFindShortNamesResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/communities/shortnames`,
      method: "GET",
    };

    const { data } = await axios(options);
    return { data };
  }

  @ServiceMethod()
  async fetchCommunity(shortName: string): AsyncServiceResponse<IFindCommunityResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/communities/${shortName}`,
      method: "GET",
    };

    const { data } = await axios(options);
    return { data };
  }

  @ServiceMethod()
  async fetchAllCommunities(): AsyncServiceResponse<IFindAllCommunitiesResponseDto> {
    const options: AxiosRequestConfig = {
      url: "/api/public/v1/communities",
      method: "GET",
    };

    const { data } = await axios(options);
    return { data };
  }
}

export default new CommunityService();
