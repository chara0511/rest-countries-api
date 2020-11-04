import React from "react";
import { ArrowDownIcon, SearchIcon } from "../icons";

const Search = () => {
  return (
    <>
      <form action="" className="relative md:flex md:justify-between">
        <span className="absolute px-5 py-4 my-2">
          <SearchIcon />
        </span>

        <input
          className="w-full md:w-120 pl-16 pr-8 my-2 py-4 text-sm dark:bg-blue-dark_blue rounded"
          type="text"
          placeholder="Search for a country..."
        />

        <div className="relative text-sm my-2">
          <button className="flex justify-between w-full sm:w-96 md:w-48 p-4 bg-white dark:bg-blue-dark_blue dark:text-gray-very_light_gray font-semibold rounded">
            Filter by Region
            <span>
              <ArrowDownIcon />
            </span>
          </button>

          <ul className="absolute w-full sm:w-96 md:w-48 mt-2 p-4 bg-white dark:bg-blue-dark_blue dark:text-gray-very_light_gray  rounded">
            <li>
              <button>Africa</button>
            </li>

            <li>
              <button>America</button>
            </li>

            <li>
              <button>Asia</button>
            </li>

            <li>
              <button>Europe</button>
            </li>

            <li>
              <button>Oceania</button>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
};

export default Search;
