import {
  user_add_post_action,
  user_delete_post_action,
  user_get_post_action,
  user_update_post_action,
  post_action,
  put_action,
  delete_action,
} from "../redux/home_action";
import axios from "axios";
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export const user_get_post_thunk = () => {
  return async (dispatch) => {
    try {
      const user = await axios.get('/posts');
      dispatch(user_get_post_action(user.data));
    } catch (err) {
      console.log("🚀 ~ file: user_thunk.js ~ line 58 ~ return ~ err", err);
    }
  };
};

export const user_add_post_thunk = (formData) => {
  return async (dispatch) => {
    try {
      const user = await axios.post('/posts', formData);
      if (user.data) dispatch(post_action())
      dispatch(user_add_post_action(user.data));
    }
    catch (err) {
      console.log("🚀 ~ file: user_thunk.js ~ line 58 ~ return ~ err", err);
    }
  }
};

export const user_edit_post_thunk = (createId, formData) => {
  return async (dispatch) => {
    try {
      const user = await axios.put('/posts/' + createId, formData);
      if (user.data) dispatch(put_action())
      dispatch(user_update_post_action(user.data));
    }
    catch (err) {
      console.log("🚀 ~ file: user_thunk.js ~ line 58 ~ return ~ err", err);
    }
  }
};

export const user_delete_post_thunk = (deleteId) => {
  return async (dispatch) => {
    try {
      const user = await axios.delete('/posts/' + deleteId);
      if (user.data) dispatch(delete_action())
      dispatch(user_delete_post_action(user.data));
    }
    catch (err) {
      console.log("🚀 ~ file: user_thunk.js ~ line 58 ~ return ~ err", err);
    }
  }
};