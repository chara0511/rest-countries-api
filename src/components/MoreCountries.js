import React from "react";

const MoreCountries = ({ countries, next, handleShowMoreCountries }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-dark_blue hover:bg-blue-semi_dark_blue p-2 rounded text-white "
          onClick={handleShowMoreCountries}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default MoreCountries;
