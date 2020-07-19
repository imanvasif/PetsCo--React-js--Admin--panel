import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export const MODULE_NAME = "user";
export const getUserData = (state) => state[MODULE_NAME];
export const getUserAuthStatus = (state) => state[MODULE_NAME].authStatus;
export const getUserAccessToken = (state) => state[MODULE_NAME].accessToken;

export function reducer(state = initialState.user, { type, payload }) {
  console.log("user reduser de state",state);
  switch (type) {
    case actionTypes.SET_USER_DATA:
      return payload;
    case actionTypes.SET_USER_LOGOUT:
      return {...initialState};
    default:
      return state;
  }
}
