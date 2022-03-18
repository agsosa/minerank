import { AxiosRequestConfig } from "axios";
import axios from "src/utils/axios.utils";
import { AsyncServiceResponse } from "src/types/service.types";
import ServiceMethod from "./internal/ServiceMethod";
import {
  IFindVersionResponseDto,
  IFindVersionsResponseDto,
  ICreateVersionResponseDto,
  IRemoveVersionResponseDto,
  IUpdateVersionResponseDto,
  ICreateVersionDto,
  IUpdateVersionDto,
} from "@shared/types/dtos/version.dto";

// TODO: Move to private routes

class VersionService {
  @ServiceMethod()
  async fetchVersions(): AsyncServiceResponse<IFindVersionsResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/versions`,
      method: "GET",
    };

    const { data } = await axios(options);

    return { data };
  }

  // TODO: Add gamemode page to filter or something
  /*@ServiceMethod()
  async fetchShortNames(): AsyncServiceResponse<IFindShortNamesResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/gamemodes/shortnames`,
      method: "GET",
    };

    const { data } = await axios(options);
    return { data };
  }*/

  @ServiceMethod()
  async fetchVersion(label: string): AsyncServiceResponse<IFindVersionResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/versions/${label}`,
      method: "GET",
    };

    const { data } = await axios(options);
    return { data };
  }

  @ServiceMethod()
  async createVersion(dto: ICreateVersionDto): AsyncServiceResponse<ICreateVersionResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/versions`,
      method: "POST",
      data: dto,
    };

    const { data } = await axios(options);
    return { data };
  }

  @ServiceMethod()
  async updateVersion(
    id: string | number,
    dto: IUpdateVersionDto
  ): AsyncServiceResponse<IUpdateVersionResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/versions/${id}`,
      method: "PATCH",
      data: dto,
    };

    const { data } = await axios(options);
    return { data };
  }

  @ServiceMethod()
  async removeVersion(id: string | number): AsyncServiceResponse<IRemoveVersionResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/versions/${id}`,
      method: "DELETE",
    };

    const { data } = await axios(options);
    return { data };
  }
}

export default new VersionService();
