export const USER_GET_POST = "USER_GET_POST";
export const USER_ADD_POST = "USER_ADD_POST";
export const USER_DELETE_POST = "USER_DELETE_POST";
export const USER_UPDATE_POST = "USER_UPDATE_POST";
export const POST_ACTION = "POST_ACTION";
export const DELETE_ACTION = "DELETE_ACTION";
export const PUT_ACTION = "PUT_ACTION";
export const CLOSE_ACTION = "CLOSE_ACTION";

export const user_get_post_action = (input) => {
  return {
    type: USER_GET_POST,
    payload: input
  };
};

export const user_add_post_action = (input) => {
  console.log(input)
  return {
    type: USER_ADD_POST,
    payload: input
  };
};

export const user_delete_post_action = (input) => {
  return {
    type: USER_DELETE_POST,
    payload: input,
  };
};

export const user_update_post_action = (input) => {
  return {
    type: USER_UPDATE_POST,
    payload: input,
  };
};

export const post_action = () => {
  return {
    type: POST_ACTION,
  };
};

export const put_action = () => {
  return {
    type: PUT_ACTION,
  };
};

export const delete_action = () => {
  return {
    type: DELETE_ACTION,
  };
};

export const close_action = () => {
  return {
    type: CLOSE_ACTION,
  };
};

