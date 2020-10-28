import {
  DELETE_CODE_COUNTRY,
  GET_ALL_COUNTRIES,
  GET_CODE_COUNTRY,
} from "../types";

export const MainReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_CODE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    case DELETE_CODE_COUNTRY:
      return {
        ...state,
        country: null,
      };

    default:
      return state;
  }
};
