import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import Item from "./Item";

const Dropdown = () => {
  const { pills } = useContext(MainContext);

  return (
    <ul className="absolute mt-2 md:right-0 w-48 p-4 bg-white dark:bg-blue-dark_blue rounded z-10">
      {pills.map((pill, i) => (
        <Item key={i} pill={pill} />
      ))}
    </ul>
  );
};

export default Dropdown;
