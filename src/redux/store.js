import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { save } from "redux-localstorage-simple";
export const store = createStore(
  reducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);
