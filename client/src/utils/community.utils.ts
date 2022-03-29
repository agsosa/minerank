/**
 * Community helper functions
 * TODO: Cast communities object to a class instance and move the methods to the class
 */

import { ICommunity, IListCommunity } from "@shared/types/entities/ICommunity";
import { getCountryFlagComponent } from "./country.utils";

/**
 * getCommunityConnectionString
 * @param community the community object
 * @returns the connection string (ip:port) of a community
 */
export function getCommunityConnectionString(community: ICommunity | IListCommunity): string {
  if (!community) return "";

  const { port, ip } = community;
  if (port === 25565) return ip;

  const portStr = port ? `:${port}` : "";
  return `${ip}${portStr}`;
}

/**
 * getCommunityFlagComponent
 * @param community the community object
 * @returns the country flag component for a community
 */
export function getCommunityCountryFlagComponent(
  community: ICommunity | IListCommunity
): React.FC<any> | null {
  if (!community) return null;

  return getCountryFlagComponent(community.countryCode);
}

/**
 * getCommunityGameModesString
 * @param community the community object
 * @returns the game modes list (string) of a community
 */
export function getCommunityGameModesString(community: ICommunity | IListCommunity): string {
  return community?.gamemodes?.map((elem) => elem.label).join(", ") || "Sin definir";
}

/**
 * getCommunityVersionsString
 * @param community the community object
 * @returns the versions list (string) of a community
 */
export function getCommunityVersionsString(community: ICommunity | IListCommunity): string {
  return community?.versions?.map((elem) => elem.label).join(" - ") || "Sin definir";
}
