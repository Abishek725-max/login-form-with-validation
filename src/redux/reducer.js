import { combineReducers } from "redux";
import api_reducer from "./api_reducer";
import user_reducer from "./user_reducer";

const reducer = combineReducers({
  user: user_reducer,
  api: api_reducer,
});

export default reducer;
