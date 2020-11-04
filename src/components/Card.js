import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils";

const Card = ({ country }) => {
  return (
    <div className="max-w-xl mb-12">
      <div>
        <Link to={`country/${country.alpha2Code}`}>
          <div
            className="rounded-t-md bg-cover bg-center h-56 2xl:h-40 bg-no-repeat"
            style={{ backgroundImage: `url(${country.flag})` }}
          />
        </Link>
      </div>

      <div className="bg-white rounded-b-md shadow-xs p-5 dark:bg-blue-dark_blue dark:text-gray-very_light_gray">
        <h1 className="text-xl font-extrabold">{country.name}</h1>
        <div className="py-5">
          <p className="font-semibold">
            Population:{" "}
            <span className="font-light">
              {formatNumber(country.population)}
            </span>
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
