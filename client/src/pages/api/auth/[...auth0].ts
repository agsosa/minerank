import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

/**
 * Creates endpoints required by Auth0
 */
export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          audience: process.env.AUTH0_API_AUDIENCE,
          scope: "openid profile email read:products", // TODO: Update
          // NOTE: Add the `offline_access` scope to also get a Refresh Token
        },
      });
    } catch (error: any) {
      res.status(error.status || 400).end(error.message);
    }
  },
});
