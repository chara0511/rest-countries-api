import React, { useReducer } from "react";
import axiosConfig from "./api/config";
import MainRouter from "./routers/MainRouter";
import { MainContext } from "./context/MainContext";
import { MainReducer } from "./context/MainReducer";
import {
  ACTIVE_DARK_MODE,
  DELETE_CODE_COUNTRY,
  ERROR_GET_ALL_COUNTRIES,
  GET_ALL_COUNTRIES,
  GET_CODE_COUNTRY,
} from "./types";

const CountriesApp = () => {
  const initialState = {
    countries: null,
    country: null,
    error: null,
    darkMode: false,
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  const getAllCountries = async () => {
    try {
      const url = "/all?fields=name;population;region;capital;alpha2Code;flag";

      const response = await axiosConfig.get(url);

      dispatch({ type: GET_ALL_COUNTRIES, payload: response.data });
    } catch (error) {
      dispatch({
        type: ERROR_GET_ALL_COUNTRIES,
        payload: error.message,
      });
    }
  };

  const getCountryByCode = async (code) => {
    const url = `/alpha/${code}`;

    const response = await axiosConfig.get(url);

    dispatch({ type: GET_CODE_COUNTRY, payload: response.data });
  };

  const deleteCountryByCode = () => {
    dispatch({ type: DELETE_CODE_COUNTRY });
  };

  const activeDarkMode = () => {
    dispatch({ type: ACTIVE_DARK_MODE, payload: !state.darkMode });
  };

  return (
    <MainContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
        error: state.error,
        darkMode: state.darkMode,
        getAllCountries,
        getCountryByCode,
        deleteCountryByCode,
        activeDarkMode,
      }}
    >
      <MainRouter />
    </MainContext.Provider>
  );
};

export default CountriesApp;
