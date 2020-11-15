import React from "react";
import Item from "./Item";

const Dropdown = ({ handleCountriesByRegion }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <ul className="absolute top-4 w-full sm:w-96 md:w-48 mt-2 p-4 bg-white dark:bg-blue-dark_blue rounded">
      {regions.map((region, i) => (
        <Item
          key={i}
          region={region}
          handleCountriesByRegion={handleCountriesByRegion}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
