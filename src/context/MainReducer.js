import {
  ACTIVE_DARK_MODE,
  DELETE_CODE_COUNTRY,
  ERROR_GET_ALL_COUNTRIES,
  ERROR_GET_COUNTRY,
  GET_ALL_COUNTRIES,
  GET_CODE_COUNTRY,
  GET_COUNTRIES_TO_SHOW,
  SHOW_MODAL,
  GET_REGION,
  GET_TAG,
  ACTIVE_PILLS,
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

    case ACTIVE_PILLS:
      return {
        ...state,
        // change this for array.map i think
        pills: state.pills.map((pill) =>
          pill.value === action.payload.value ? action.payload : pill
        ),
      };

    case GET_REGION:
      return {
        ...state,
        region: action.payload,
      };

    case GET_TAG:
      return {
        ...state,
        tag: action.payload,
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
