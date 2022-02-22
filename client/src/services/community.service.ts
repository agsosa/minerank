import axios, { Method } from "axios";
import { getAppConfig } from "./config.service";

/**
 * Fetch communities list
 */
fetchCommunities.URL = `${getAppConfig().appHomeUrl}/api/public/v1/communities`;
fetchCommunities.METHOD = "GET";
fetchCommunities.REQUIRES_AUTH = false;
export async function fetchCommunities(/*page: number = 1, featuredFirst: boolean*/) {
  try {
    const result = await axios({
      url: fetchCommunities.URL,
      method: fetchCommunities.METHOD as Method,
    });
    return result.data;
  } catch (err) {}
}
