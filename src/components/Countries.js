import React from "react";
import Card from "./Card";

const Countries = ({ countries }) => {
  return (
    <div className="grid my-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 2xl:gap-12">
      {countries.map((country) => (
        <Card key={country.alpha2Code} country={country} />
      ))}
    </div>
  );
};

export default Countries;
