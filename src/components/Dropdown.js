import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import Item from "./Item";

const Dropdown = ({ handleCountriesByRegion }) => {
  const { pills } = useContext(MainContext);

  return (
    <ul className="absolute top-4 w-full sm:w-96 md:w-48 mt-2 p-4 bg-white dark:bg-blue-dark_blue rounded">
      {pills.map((pill, i) => (
        <Item
          key={i}
          pill={pill}
          handleCountriesByRegion={handleCountriesByRegion}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
