import { createSafeActionClient } from "next-safe-action";

export const action = createSafeActionClient({
  handleReturnedServerError: (e) => {
    if (e instanceof Error) {
      return e.message; // Return string directly
    }

    return "Oh no, something went wrong!"; // Return string directly
  },
});
