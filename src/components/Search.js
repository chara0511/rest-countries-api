import React from "react";
import { SearchIcon } from "../icons";

const Search = () => {
  return (
    <div>
      <form action="" className="relative">
        <span className="absolute px-5 py-4">
          <SearchIcon />
        </span>

        <input
          className=" w-full pl-16 py-4"
          type="text"
          placeholder="Search for a country..."
        />
      </form>

      <button>
        Filter by Region <span> {">"} </span>
      </button>

      <ul>
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
  );
};

export default Search;
