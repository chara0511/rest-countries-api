import React, { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { useForm } from "../hooks/useForm";
import { ArrowDownIcon, SearchIcon } from "../icons";

const Search = () => {
  const {
    countries,
    modal,
    showModal,
    getCountriesByTag,
    getCountriesByRegion,
  } = useContext(MainContext);

  const [formValues, handleInputChange] = useForm({ searchText: "" });

  const { searchText } = formValues;

  useEffect(() => {
    if (countries) {
      getCountriesByTag(searchText);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const handleShowModal = (e) => {
    e.preventDefault();

    showModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getCountriesByTag(searchText);
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

      <div className="relative flex flex-col md:flex-row items-center text-sm my-2">
        <button
          className="flex justify-between w-full sm:w-96 md:w-48 p-4 bg-white dark:bg-blue-dark_blue dark:text-gray-very_light_gray font-semibold rounded"
          onClick={handleShowModal}
        >
          Filter by Region
          <span>
            <ArrowDownIcon />
          </span>
        </button>

        <div>
          <ul className="flex my-3 md:my-0 md:mx-3">
            <li>
              <button className="bg-blue-dark_blue text-white px-2 py-1 rounded-full text-xs mr-2">
                Africa X
              </button>
            </li>
            <li>
              <button className="bg-blue-dark_blue text-white px-2 py-1 rounded-full text-xs mr-2">
                Americas X
              </button>
            </li>
            <li>
              <button className="bg-blue-dark_blue text-white px-2 py-1 rounded-full text-xs mr-2">
                Asia X
              </button>
            </li>
            <li>
              <button className="bg-blue-dark_blue text-white px-2 py-1 rounded-full text-xs mr-2">
                Europe X
              </button>
            </li>
            <li>
              <button className="bg-blue-dark_blue text-white px-2 py-1 rounded-full text-xs mr-2">
                Oceania X
              </button>
            </li>
          </ul>
        </div>

        {modal && (
          <ul className="absolute top-4 w-full sm:w-96 md:w-48 mt-2 p-4 bg-white dark:bg-blue-dark_blue rounded">
            <li>
              <input
                className="w-full text-left cursor-pointer mt-1 bg-white hover:bg-gray-very_light_gray dark:hover:bg-blue-semi_dark_blue dark:bg-blue-dark_blue dark:text-white rounded"
                type="button"
                value="Africa"
                onClick={handleCountriesByRegion}
              />
            </li>

            <li>
              <input
                className="w-full text-left cursor-pointer mt-1 bg-white hover:bg-gray-very_light_gray dark:hover:bg-blue-semi_dark_blue dark:bg-blue-dark_blue dark:text-white rounded"
                type="button"
                value="Americas"
                onClick={handleCountriesByRegion}
              />
            </li>

            <li>
              <input
                className="w-full text-left cursor-pointer mt-1 bg-white hover:bg-gray-very_light_gray dark:hover:bg-blue-semi_dark_blue dark:bg-blue-dark_blue dark:text-white rounded"
                type="button"
                value="Asia"
                onClick={handleCountriesByRegion}
              />
            </li>

            <li>
              <input
                className="w-full text-left cursor-pointer mt-1 bg-white hover:bg-gray-very_light_gray dark:hover:bg-blue-semi_dark_blue dark:bg-blue-dark_blue dark:text-white rounded"
                type="button"
                value="Europe"
                onClick={handleCountriesByRegion}
              />
            </li>

            <li>
              <input
                className="w-full text-left cursor-pointer mt-1 bg-white hover:bg-gray-very_light_gray dark:hover:bg-blue-semi_dark_blue dark:bg-blue-dark_blue dark:text-white rounded"
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
