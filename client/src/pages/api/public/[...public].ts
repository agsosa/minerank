import axios, { Method } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Public proxy to the API server
 * Catch-all
 * api/public/{server API request path}
 * Example: GET /api/public/v1/communities
 */
export default async function handlePublicAPI(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method: Method = (req.method as Method) || "GET";
    const body: any = req.body;
    const path = req.url?.replace("/api/public/", "");
    const url = `${process.env.API_SERVER_BASE_URL}/api/` + path;

    const result = await axios({
      url,
      method,
      data: body,
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
}
