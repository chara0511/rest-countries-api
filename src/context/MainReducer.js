import {
  ACTIVE_DARK_MODE,
  DELETE_CODE_COUNTRY,
  ERROR_GET_ALL_COUNTRIES,
  ERROR_GET_COUNTRY,
  GET_ALL_COUNTRIES,
  GET_CODE_COUNTRY,
  GET_COUNTRIES_BY_REGION,
  GET_COUNTRIES_TO_SHOW,
  GET_COUNTRIES_BY_TAG,
  SHOW_MODAL,
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

    case GET_COUNTRIES_TO_SHOW:
      return {
        ...state,
        countriesToShow: [...action.payload],
      };

    case GET_COUNTRIES_BY_TAG:
      return {
        ...state,
        countriesToShow: state.countries.filter((country) =>
          country.name.includes(
            action.payload.charAt(0).toUpperCase() + action.payload.slice(1)
          )
        ),
      };

    case GET_COUNTRIES_BY_REGION:
      return {
        ...state,
        countriesToShow: state.countries.filter(
          (country) => country.region === action.payload
        ),
      };

    case DELETE_CODE_COUNTRY:
      return {
        ...state,
        country: null,
      };

    case ERROR_GET_ALL_COUNTRIES:
    case ERROR_GET_COUNTRY:
      return {
        ...state,
        error: action.payload,
      };

    case ACTIVE_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };

    case SHOW_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };

    default:
      return state;
  }
};
