import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export const MODULE_NAME = "category";

export function reducer(state = initialState.category, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
