import * as actionTypes from '../actionTypes';
import { networkError } from './networkError';
import axios from '../../../axios-base';

const loginUserStart = () => ({
  type: actionTypes.LOGIN_USER_START,
});

const loginUserSuccess = user => {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: user,
  };
};

const loginUserFail = errorMsg => {
  return {
    type: actionTypes.LOGIN_USER_FAIL,
    payload: errorMsg,
  };
};

export const authenticateUser = loginData => {
  return dispatch => {
    dispatch(loginUserStart());
    const { username, password } = loginData;
    axios
      .get(`users/single/${username}/${password}`)
      .then(response => {
        const user = response.data.result;
        dispatch(loginUserSuccess(user));
      })
      .catch(error => {
        if (!error.response) {
          dispatch(networkError());
          dispatch(loginUserFail(null));
        } else dispatch(loginUserFail(error.response));
      });
  };
};

export const logoutUser = () => ({
  type: actionTypes.LOGOUT_USER,
});
