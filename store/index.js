import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./Logic/User/UserSlice";
const store = configureStore(
  {
    reducer: {
      User: UserSlice.reducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
