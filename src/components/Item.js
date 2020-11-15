import React from "react";

const Item = ({ region, handleCountriesByRegion }) => {
  return (
    <li>
      <input
        className="w-full text-left cursor-pointer mt-1 bg-white hover:bg-gray-very_light_gray dark:hover:bg-blue-semi_dark_blue dark:bg-blue-dark_blue dark:text-white rounded"
        type="button"
        value={region}
        onClick={handleCountriesByRegion}
      />
    </li>
  );
};

export default Item;
