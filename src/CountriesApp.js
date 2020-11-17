import React, { useReducer } from "react";
import axiosConfig from "./api/config";
import MainRouter from "./routers/MainRouter";
import { MainContext } from "./context/MainContext";
import { MainReducer } from "./context/MainReducer";
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
} from "./types";

const CountriesApp = () => {
  const initialState = {
    countries: null,
    countriesFiltered: [],
    countriesToShow: [],
    country: null,
    darkMode: false,
    error: null,
    modal: null,
    pills: [
      { value: "Africa", active: false },
      { value: "Americas", active: false },
      { value: "Asia", active: false },
      { value: "Europe", active: false },
      { value: "Oceania", active: false },
    ],
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

  const getTag = (tag) => {
    dispatch({ type: GET_TAG, payload: tag });
  };

  const getCountriesByTag = (tag) => {
    if (state.countriesFiltered.length === 0) {
      console.log(state.countriesFiltered);
      return dispatch({
        type: GET_COUNTRIES_TO_SHOW,
        payload: state.countries.filter((country) =>
          country.name.toLowerCase().includes(tag.toLowerCase())
        ),
      });
    }

    console.log(state.countriesFiltered);

    dispatch({
      type: GET_COUNTRIES_TO_SHOW,
      payload: state.countriesFiltered.filter((country) =>
        country.name.toLowerCase().includes(tag.toLowerCase())
      ),
    });

    getTag(tag);
  };

  const getRegion = (region) => {
    dispatch({ type: GET_REGION, payload: region });
  };

  const getCountriesByRegion = (region) => {
    dispatch({
      type: ADD_COUNTRIES_BY_REGION,
      payload: state.countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      ),
    });

    handlePills(region);

    getRegion(region);
  };

  const deleteCountriesByRegion = (region) => {
    dispatch({
      type: DELETE_COUNTRIES_BY_REGION,
      payload: region,
    });
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

  const handlePills = (region) => {
    dispatch({ type: HANDLE_PILLS, payload: region });
  };

  const resetPills = () => {
    dispatch({ type: RESET_PILLS, payload: initialState.pills });
  };

  const showModal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  return (
    <MainContext.Provider
      value={{
        countries: state.countries,
        countriesToShow: state.countriesToShow,
        countriesFiltered: state.countriesFiltered,
        country: state.country,
        darkMode: state.darkMode,
        error: state.error,
        modal: state.modal,
        pills: state.pills,
        region: state.region,
        activeDarkMode,
        getAllCountries,
        getCountriesByTag,
        getCountriesByRegion,
        getCountriesToShow,
        getCountryByCode,
        deleteCountryByCode,
        handlePills,
        resetPills,
        showModal,
        deleteCountriesByRegion,
      }}
    >
      <MainRouter />
    </MainContext.Provider>
  );
};

export default CountriesApp;
