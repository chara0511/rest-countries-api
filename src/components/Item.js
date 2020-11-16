import React from "react";

const Item = ({ pill, handleCountriesByRegion }) => {
  return (
    <li>
      <input
        className="w-full text-left cursor-pointer mt-1 bg-white hover:bg-gray-very_light_gray dark:hover:bg-blue-semi_dark_blue dark:bg-blue-dark_blue dark:text-white rounded"
        type="button"
        value={pill.value}
        onClick={handleCountriesByRegion}
        disabled={pill.active}
      />
    </li>
  );
};

export default Item;
