import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import axios, { Method } from "axios";

/**
 * Private (Auth0) proxy to the API server
 * Catch-all
 * api/private/{server API request path}
 * Example: POST /api/private/v1/communities
 */
export default withApiAuthRequired(async function hadlePrivateAPI(req, res) {
  try {
    const method: Method = (req.method as Method) || "GET";
    const path = req.url?.replace("/api/secure/", "");
    const url = `${process.env.API_SERVER_BASE_URL}/api/` + path;

    const { accessToken } = await getAccessToken(req, res, {
      scopes: [],
    });

    const result = await axios({
      url,
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.status(result.status).json(result.data);
  } catch (err: any) {
    const statusCode = err.response?.status || 500;

    const response = err.response?.data || {
      statusCode,
      message: "Internal Server Error",
    };

    res.status(statusCode).send(response);
  }
});
