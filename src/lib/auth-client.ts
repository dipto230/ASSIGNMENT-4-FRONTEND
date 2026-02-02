import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://redeploy-medistore.vercel.app",
  fetchOptions: {
    credentials: "include",
  },
});
