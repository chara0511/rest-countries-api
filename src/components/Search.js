import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { useForm } from "../hooks/useForm";
import { ArrowDownIcon, SearchIcon } from "../icons";

const Search = () => {
  const {
    modal,
    showModal,
    getCountriesByTag,
    getCountriesByRegion,
  } = useContext(MainContext);

  const [formValues, handleInputChange, reset] = useForm({ searchText: "" });

  const { searchText } = formValues;

  const handleShowModal = (e) => {
    e.preventDefault();

    showModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getCountriesByTag(searchText);

    reset();
  };

  const handleCountriesByRegion = (e) => {
    e.preventDefault();

    getCountriesByRegion(e.target.value);

    showModal();
  };

  return (
    <>
      <form
        action=""
        className="relative md:flex md:justify-between"
        onSubmit={handleSubmit}
      >
        <span className="absolute px-5 py-4 my-2">
          <SearchIcon />
        </span>

        <input
          className="w-full md:w-120 pl-16 pr-8 my-2 py-4 text-sm dark:bg-blue-dark_blue rounded"
          type="text"
          placeholder="Search for a country..."
          name="searchText"
          value={searchText}
          onChange={handleInputChange}
        />
      </form>

      <div className="relative text-sm my-2">
        <button
          className="flex justify-between w-full sm:w-96 md:w-48 p-4 bg-white dark:bg-blue-dark_blue dark:text-gray-very_light_gray font-semibold rounded"
          onClick={handleShowModal}
        >
          Filter by Region
          <span>
            <ArrowDownIcon />
          </span>
        </button>

        {modal && (
          <ul className="absolute w-full sm:w-96 md:w-48 mt-2 p-4 bg-white dark:bg-blue-dark_blue dark:text-gray-very_light_gray rounded">
            <li>
              <input
                className="w-full text-left cursor-pointer mt-1"
                type="button"
                value="Africa"
                onClick={handleCountriesByRegion}
              />
            </li>

            <li>
              <input
                className="w-full text-left cursor-pointer mt-1"
                type="button"
                value="Americas"
                onClick={handleCountriesByRegion}
              />
            </li>

            <li>
              <input
                className="w-full text-left cursor-pointer mt-1"
                type="button"
                value="Asia"
                onClick={handleCountriesByRegion}
              />
            </li>

            <li>
              <input
                className="w-full text-left cursor-pointer mt-1"
                type="button"
                value="Europe"
                onClick={handleCountriesByRegion}
              />
            </li>

            <li>
              <input
                className="w-full text-left capitalize cursor-pointer mt-1"
                type="submit"
                value="Oceania"
                onClick={handleCountriesByRegion}
              />
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Search;
