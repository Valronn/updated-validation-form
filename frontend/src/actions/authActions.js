import axios from "axios";
import setAuthToken from "../utilities/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

//Register
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
//Login
export const loginUser = userData => dispatch => {
  axios
    .post("/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })

    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Set logged user with decoded

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//User is loading

export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
//Logout user
export const logoutUser = () => dispatch =>{
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}))
}
