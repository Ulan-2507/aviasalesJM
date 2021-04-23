import { createStore } from "redux";
import { filterReducer } from "./reducers/filterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(filterReducer, composeWithDevTools());

export default store;
