import { AxiosRequestConfig } from "axios";
import axios from "src/utils/axios.utils";

import {
  IFindCommunitiesDto,
  IFindCommunitiesResponseDto,
  IFindCommunityResponseDto,
} from "@shared/types/dtos/community.dto";
import { AsyncServiceResponse } from "src/types/service.types";
import ServiceMethod from "./internal/ServiceMethod";
import { IFindShortNamesResponseDto } from "../../../server/nest.js/src/shared/types/dtos/community.dto";

class CommunityService {
  @ServiceMethod()
  async fetchCommunities(
    findCommunitiesDto: IFindCommunitiesDto
  ): AsyncServiceResponse<IFindCommunitiesResponseDto> {
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
}

export default new CommunityService();
