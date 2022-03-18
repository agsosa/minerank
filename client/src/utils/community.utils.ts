/**
 * Community helper functions
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
