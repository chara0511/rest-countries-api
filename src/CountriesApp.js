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
  HANLDE_LOAD_MORE,
  HANDLE_PILLS,
  RESET_VALUES,
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
    loadMore: true,
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
    getTag(tag);

    if (state.countriesFiltered.length === 0) {
      return dispatch({
        type: GET_COUNTRIES_TO_SHOW,
        payload: state.countries.filter((country) =>
          country.name.toLowerCase().includes(tag.trim().toLowerCase())
        ),
      });
    }

    dispatch({
      type: GET_COUNTRIES_TO_SHOW,
      payload: state.countriesFiltered.filter((country) =>
        country.name.toLowerCase().includes(tag.trim().toLowerCase())
      ),
    });
  };

  const getRegion = (region) => {
    dispatch({ type: GET_REGION, payload: region });
  };

  const getCountriesByRegion = (region) => {
    getRegion(region);

    handlePills(region);

    dispatch({
      type: ADD_COUNTRIES_BY_REGION,
      payload: state.countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      ),
    });
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

  const handleLoadMore = () => {
    dispatch({ type: HANLDE_LOAD_MORE });
  };

  const handlePills = (region) => {
    dispatch({ type: HANDLE_PILLS, payload: region });
  };

  const resetValues = () => {
    dispatch({
      type: RESET_VALUES,
      payload: {
        countriesFiltered: initialState.countriesFiltered,
        loadMore: initialState.loadMore,
        pills: initialState.pills,
      },
    });
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
        loadMore: state.loadMore,
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
        handleLoadMore,
        handlePills,
        resetValues,
        showModal,
        deleteCountriesByRegion,
      }}
    >
      <MainRouter />
    </MainContext.Provider>
  );
};

export default CountriesApp;
