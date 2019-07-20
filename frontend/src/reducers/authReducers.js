import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";
import { type } from "os";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (type.action) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...this.state,
        loading: true
      };
    default:
      return state;
  }
};
