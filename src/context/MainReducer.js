import {
  ACTIVE_DARK_MODE,
  ADD_COUNTRIES_BY_REGION,
  DELETE_CODE_COUNTRY,
  DELETE_COUNTRIES_BY_REGION,
  ERROR_GET_ALL_COUNTRIES,
  ERROR_GET_COUNTRY,
  GET_ALL_COUNTRIES,
  GET_CODE_COUNTRY,
  GET_COUNTRIES_TO_SHOW,
  GET_REGION,
  GET_TAG,
  HANDLE_PILLS,
  RESET_PILLS,
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

    case GET_COUNTRIES_TO_SHOW:
      return {
        ...state,
        countriesToShow: [...action.payload],
      };

    case ADD_COUNTRIES_BY_REGION:
      return {
        ...state,
        countriesFiltered: [...state.countriesFiltered, ...action.payload],
      };

    case DELETE_COUNTRIES_BY_REGION:
      return {
        ...state,
        countriesFiltered: state.countriesFiltered.filter(
          (country) => country.region !== action.payload
        ),
      };

    case GET_TAG:
      return {
        ...state,
        tag: action.payload,
      };

    case GET_REGION:
      return {
        ...state,
        region: action.payload,
      };

    case HANDLE_PILLS:
      return {
        ...state,
        pills: state.pills.map((pill) =>
          pill.value === action.payload
            ? { value: action.payload, active: !pill.active }
            : pill
        ),
      };

    case RESET_PILLS:
      return {
        ...state,
        pills: action.payload,
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
