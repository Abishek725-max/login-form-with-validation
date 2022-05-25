
import {
  USER_GET_POST,
  USER_ADD_POST,
  USER_UPDATE_POST,
  USER_DELETE_POST,
} from "./home_action";

const initState = {
  getData: {},
};

const user_reducer = (state = initState, { payload, type }) => {
  if (type === USER_GET_POST) {
    state = { ...state, data: payload };
  }
  if (type === USER_ADD_POST) {
    state = { ...state };
  }
  if (type === USER_UPDATE_POST) {
    state = { ...state };
  }
  if (type === USER_DELETE_POST) {
    state = { ...state };
  }
  return state;
};

export default user_reducer;
