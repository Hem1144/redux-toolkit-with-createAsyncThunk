import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});

// https://65aa8d16081bd82e1d973a1c.mockapi.io/crud/
