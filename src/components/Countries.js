import React from "react";
import Card from "./Card";
import MoreCountries from "./MoreCountries";
import NoResults from "./NoResults";

const Countries = ({ countries, next, handleShowMoreCountries }) => {
  return (
    <>
      {countries.length === 0 ? (
        <NoResults />
      ) : (
        <>
          <div className="grid my-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 2xl:gap-12">
            {countries
              .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase())
              .map((country) => (
                <Card key={country.alpha2Code} country={country} />
              ))}
          </div>

          <MoreCountries
            next={next}
            handleShowMoreCountries={handleShowMoreCountries}
          />
        </>
      )}
    </>
  );
};

export default Countries;
