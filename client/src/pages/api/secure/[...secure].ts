import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import axios, { Method } from "axios";

/**
 * Secure (Auth0) proxy to the API server
 * Catch-all
 * api/secure/{server API request path}
 * Example: GET /api/secure/v1/communities
 */
export default withApiAuthRequired(async function handleAPI(req, res) {
  try {
    const method: Method = (req.method as Method) || "GET";
    const path = req.url?.replace("/api/secure/", "");
    const url = "http://localhost:3030/api/" + path;

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
