import React, { useReducer } from "react";
import axiosConfig from "./api/config";
import MainRouter from "./routers/MainRouter";
import { MainContext } from "./context/MainContext";
import { MainReducer } from "./context/MainReducer";
import {
  DELETE_CODE_COUNTRY,
  GET_ALL_COUNTRIES,
  GET_CODE_COUNTRY,
} from "./types";

const CountriesApp = () => {
  const initialState = {
    countries: null,
    country: null,
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  const getAllCountries = async () => {
    const url = "/all";

    const response = await axiosConfig.get(url);

    dispatch({ type: GET_ALL_COUNTRIES, payload: response.data });
  };

  const getCountryByCode = async (code) => {
    const url = `/alpha/${code}`;

    const response = await axiosConfig.get(url);

    dispatch({ type: GET_CODE_COUNTRY, payload: response.data });
  };

  const deleteCountryByCode = () => {
    dispatch({ type: DELETE_CODE_COUNTRY });
  };

  return (
    <MainContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
        getAllCountries,
        getCountryByCode,
        deleteCountryByCode,
      }}
    >
      <MainRouter />
    </MainContext.Provider>
  );
};

export default CountriesApp;
