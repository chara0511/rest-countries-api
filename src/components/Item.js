import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Item = ({ pill }) => {
  const { getCountriesByRegion, showModal } = useContext(MainContext);

  const handleCountriesByRegion = (e) => {
    getCountriesByRegion(e.target.value);

    showModal();
  };

  return (
    <li>
      <input
        className={`w-full text-left cursor-pointer mt-1 bg-white ${
          pill.active
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-very_light_gray dark:hover:bg-blue-semi_dark_blue"
        }  dark:bg-blue-dark_blue dark:text-white rounded`}
        type="button"
        value={pill.value}
        onClick={handleCountriesByRegion}
        disabled={pill.active}
      />
    </li>
  );
};

export default Item;
