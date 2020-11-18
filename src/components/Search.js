import React, { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { useForm } from "../hooks/useForm";
import { ArrowDownIcon, SearchIcon } from "../icons";
import Dropdown from "./Dropdown";
import Pills from "./Pills";

const Search = () => {
  const {
    countries,
    countriesFiltered,
    modal,
    pills,
    showModal,
    getCountriesByTag,
  } = useContext(MainContext);

  const [formValues, handleInputChange] = useForm({ searchText: "" });

  const { searchText } = formValues;

  useEffect(() => {
    if (countries) {
      getCountriesByTag(searchText);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, countries, countriesFiltered]);

  const handleShowModal = () => {
    showModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getCountriesByTag(searchText);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm my-2">
        <form
          className="relative md:flex md:justify-between"
          onSubmit={handleSubmit}
        >
          <span className="absolute px-5 py-4 my-2 text-gray-dark_gray">
            <SearchIcon />
          </span>

          <input
            className="w-full md:w-120 pl-16 pr-8 my-2 py-4 text-sm dark:bg-blue-dark_blue dark:text-white rounded"
            type="text"
            placeholder="Search for a country..."
            autoComplete="off"
            aria-label="Search for a country"
            name="searchText"
            value={searchText}
            onChange={handleInputChange}
          />

          <button className="hidden">Submit</button>
        </form>

        <div className="relative">
          <button
            className="flex justify-between items-center w-48 p-4 bg-white dark:bg-blue-dark_blue dark:text-gray-very_light_gray font-semibold rounded"
            onClick={handleShowModal}
          >
            Filter by Region
            <span>
              <ArrowDownIcon />
            </span>
          </button>

          {modal && <Dropdown />}
        </div>
      </div>

      <div className="relative text-sm my-2">
        {pills && <Pills pills={pills} />}
      </div>
    </>
  );
};

export default Search;
