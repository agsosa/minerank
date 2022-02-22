import axios, { Method } from "axios";
import { getAppConfig } from "./config.service";

fetchCommunities.URL = `${getAppConfig().appHomeUrl}/api/public/v1/communities`;
fetchCommunities.METHOD = "GET";
fetchCommunities.isPrivate = false;
export async function fetchCommunities() {
  try {
    const result = await axios({
      url: fetchCommunities.URL,
      method: fetchCommunities.METHOD as Method,
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
