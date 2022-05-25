import {
    POST_ACTION,
    PUT_ACTION,
    DELETE_ACTION,
    CLOSE_ACTION
} from "./home_action";

const initState = {
    toastShow: false,
    message: "",
};

const api_reducer = (state = initState, { type }) => {
    if (type === POST_ACTION) {
        state = { ...state, toastShow: true, message: "Post Added Succesfully" };
    }
    if (type === PUT_ACTION) {
        state = { ...state, toastShow: true, message: "Post Updated Successfully" };
    }
    if (type === DELETE_ACTION) {
        state = { ...state, toastShow: true, message: "Post Deleted Successfully" };
    }
    if(type === CLOSE_ACTION){
        return initState;
    }
    return state;
};

export default api_reducer;
