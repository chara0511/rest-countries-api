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
          <div className="grid my-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 2xl:gap-8">
            {countries
              .sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase()
                  ? -1
                  : a.name.toLowerCase() > b.name.toLowerCase()
                  ? 1
                  : 0
              )
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
