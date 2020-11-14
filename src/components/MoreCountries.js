import React from "react";

const MoreCountries = ({ handleShowMoreCountries }) => {
  return (
    <div>
      <button onClick={handleShowMoreCountries}>Load More</button>
    </div>
  );
};

export default MoreCountries;
