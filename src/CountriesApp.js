import React, { useReducer } from "react";
import axiosConfig from "./api/config";
import MainRouter from "./routers/MainRouter";
import { MainContext } from "./context/MainContext";
import { MainReducer } from "./context/MainReducer";
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
} from "./types";

const CountriesApp = () => {
  const initialState = {
    countries: null,
    countriesToShow: [],
    country: null,
    darkMode: false,
    error: null,
    modal: null,
    // check this code
    pills: [],
    region: "",
    tag: "",
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

  const getCountriesToShow = (countries) => {
    dispatch({
      type: GET_COUNTRIES_TO_SHOW,
      payload: countries,
    });
  };

  //new code
  const getTag = (tag) => {
    dispatch({ type: GET_TAG, payload: tag });
  };

  const getCountriesByTag = (tag) => {
    const filteredCountriesByRegion = state.countries.filter((country) =>
      country.region.toLowerCase().includes(state.region.toLowerCase())
    );

    dispatch({
      type: GET_COUNTRIES_TO_SHOW,
      payload: filteredCountriesByRegion.filter((country) =>
        country.name.toLowerCase().includes(tag.toLowerCase())
      ),
    });

    getTag(tag);
  };

  //new code
  const getRegion = (region) => {
    dispatch({ type: GET_REGION, payload: region });
  };

  const getCountriesByRegion = (region) => {
    const filteredCountriesByRegion = state.countries.filter((country) =>
      country.name.toLowerCase().includes(state.tag)
    );

    dispatch({
      type: GET_COUNTRIES_TO_SHOW,
      payload: filteredCountriesByRegion.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      ),
    });

    activePills(region);

    getRegion(region);
  };

  const getCountryByCode = async (code) => {
    try {
      const url = `/alpha/${code}`;

      const response = await axiosConfig.get(url);

      dispatch({ type: GET_CODE_COUNTRY, payload: response.data });
    } catch (error) {
      dispatch({
        type: ERROR_GET_COUNTRY,
        payload: error.message,
      });
    }
  };

  const deleteCountryByCode = () => {
    dispatch({ type: DELETE_CODE_COUNTRY });
  };

  const activeDarkMode = () => {
    dispatch({ type: ACTIVE_DARK_MODE, payload: !state.darkMode });
  };

  const activePills = (region) => {
    dispatch({ type: ACTIVE_PILLS, payload: region });
  };

  const showModal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  return (
    <MainContext.Provider
      value={{
        countries: state.countries,
        countriesToShow: state.countriesToShow,
        country: state.country,
        darkMode: state.darkMode,
        error: state.error,
        modal: state.modal,
        pills: state.pills,
        region: state.region,
        getAllCountries,
        getCountriesByTag,
        getCountriesByRegion,
        getCountryByCode,
        getCountriesToShow,
        deleteCountryByCode,
        activeDarkMode,
        showModal,
      }}
    >
      <MainRouter />
    </MainContext.Provider>
  );
};

export default CountriesApp;
