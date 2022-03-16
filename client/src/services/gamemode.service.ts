import { AxiosRequestConfig } from "axios";
import axios from "src/utils/axios.utils";
import { AsyncServiceResponse } from "src/types/service.types";
import ServiceMethod from "./internal/ServiceMethod";
import {
  IFindGameModeResponseDto,
  IFindGameModesResponseDto,
  ICreateGameModeResponseDto,
  IRemoveGameModeResponseDto,
  IUpdateGameModeResponseDto,
  ICreateGameModeDto,
  IUpdateGamemodeDto,
} from "@shared/types/dtos/gamemode.dto";

// TODO: Move to private routes

class GameModeService {
  @ServiceMethod()
  async fetchGameModes(): AsyncServiceResponse<IFindGameModesResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/gamemodes`,
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
  async fetchGameMode(shortName: string): AsyncServiceResponse<IFindGameModeResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/gamemodes/${shortName}`,
      method: "GET",
    };

    const { data } = await axios(options);
    return { data };
  }

  @ServiceMethod()
  async createGameMode(dto: ICreateGameModeDto): AsyncServiceResponse<ICreateGameModeResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/gamemodes`,
      method: "POST",
      data: dto,
    };

    const { data } = await axios(options);
    return { data };
  }

  @ServiceMethod()
  async updateGameMode(
    id: string | number,
    dto: IUpdateGamemodeDto
  ): AsyncServiceResponse<IUpdateGameModeResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/gamemodes/${id}`,
      method: "PATCH",
      data: dto,
    };

    const { data } = await axios(options);
    return { data };
  }

  @ServiceMethod()
  async removeGamemode(id: string | number): AsyncServiceResponse<IRemoveGameModeResponseDto> {
    const options: AxiosRequestConfig = {
      url: `/api/public/v1/gamemodes/${id}`,
      method: "DELETE",
    };

    const { data } = await axios(options);
    return { data };
  }
}

export default new GameModeService();
