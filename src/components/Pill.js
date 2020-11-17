import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { CloseIcon } from "../icons";

const Pill = ({ pill }) => {
  const { handlePills, deleteCountriesByRegion } = useContext(MainContext);

  const handleClick = (e) => {
    handlePills(e.target.value);

    deleteCountriesByRegion(e.target.value);
  };

  return (
    <>
      {pill.active && (
        <li className="relative flex items-center h-8">
          <input
            className="bg-blue-dark_blue text-white cursor-pointer px-2 py-1 rounded-full text-xs mr-2"
            type="button"
            value={pill.value}
            onClick={handleClick}
          />

          <CloseIcon />
        </li>
      )}
    </>
  );
};

export default Pill;
