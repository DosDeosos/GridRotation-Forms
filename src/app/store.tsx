import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/formsStorage";
import tableReducer from "../features/tableStorage";

export const store = configureStore({
  reducer: {
    form: formReducer,
    table: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
