import React from "react";

const Search = () => {
  return (
    <div>
      <input type="text" placeholder="Search for a country" />

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
