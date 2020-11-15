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
    modal,
    pills,
    showModal,
    getCountriesByTag,
    getCountriesByRegion,
  } = useContext(MainContext);

  const [formValues, handleInputChange] = useForm({ searchText: "" });

  const { searchText } = formValues;

  // check this code and test in reducer
  const a = pills.map((pill) =>
    pill.value === "Africa" ? { ...pill, active: false } : pill
  );
  console.log(a);

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

        <div>{pills && <Pills pills={pills} />}</div>

        {modal && (
          <Dropdown handleCountriesByRegion={handleCountriesByRegion} />
        )}
      </div>
    </>
  );
};

export default Search;
