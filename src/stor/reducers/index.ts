import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { ticketReducer } from "./ticketReducer";

export const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
