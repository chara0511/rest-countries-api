import React from "react";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  return (
    <div className="max-w-xl mb-12">
      <div>
        <Link to={`country/${country.alpha2Code}`}>
          <img className="rounded-t-md" src={country.flag} alt={country.name} />
        </Link>
      </div>

      <div className="bg-white rounded-b-md shadow-xs p-5">
        <h1 className="text-xl font-extrabold">{country.name}</h1>
        <div className="py-5">
          <p className="font-semibold">
            Population: <span className="font-light">{country.population}</span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-light">{country.region}</span>
          </p>
          <p className="font-semibold">
            Capital: <span className="font-light">{country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
