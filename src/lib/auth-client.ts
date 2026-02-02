import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://medistore-assignment-70.vercel.app",
  fetchOptions: {
    credentials: "include",
  },
});
