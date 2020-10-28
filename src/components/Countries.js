import React from "react";
import Card from "./Card";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <Card key={country.alpha2Code} country={country} />
      ))}
    </div>
  );
};

export default Countries;
