import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <ul key={country.id}>
          <li>
            <Link to={`country/${country.id}`}>image</Link>
          </li>
          <li>{country.name}</li>
          <li>{country.population}</li>
          <li>{country.region}</li>
          <li>{country.capital}</li>
        </ul>
      ))}
    </div>
  );
};

export default Countries;
