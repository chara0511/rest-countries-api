import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import Navbar from "./Navbar";
import { formatNumber } from "../utils";
import { ArrowBackIcon } from "../icons";

const Country = () => {
  const { country, getCountryByCode, deleteCountryByCode } = useContext(
    MainContext
  );

  const params = useParams();

  useEffect(() => {
    getCountryByCode(params.id);

    return () => deleteCountryByCode();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex-1 bg-gray-very_light_gray dark:bg-blue-semi_dark_blue dark:text-gray-very_light_gray">
        <div className="max-w-screen-xl m-auto px-5 py-5">
          <Link
            to={"/"}
            className="flex justify-center py-2 w-24 md:w-48 my-12 rounded shadow-normal dark:bg-blue-dark_blue"
          >
            <span className="mr-1">
              <ArrowBackIcon />
            </span>
            Back
          </Link>
        </div>

        {!country ? (
          "loading"
        ) : (
          <div className="w-full max-w-screen-xl m-auto px-5 md:flex md:justify-between gap-4 md:gap-8 lg:gap-16 2xl:gap-32">
            <img
              className="m-auto sm:w-104 md:w-120 lg:w-wrapper lg:h-104"
              src={country.flag}
              alt=""
            />

            <div className="flex-1">
              <h1 className="text-2xl font-bold my-8">{country.name}</h1>

              <ul className="column-count">
                <li className="font-semibold">
                  Native Name:{" "}
                  <span className="font-medium">{country.nativeName}</span>
                </li>
                <li className="font-semibold">
                  Population:{" "}
                  <span className="font-medium">
                    {formatNumber(country.population)}
                  </span>
                </li>
                <li className="font-semibold">
                  Region: <span className="font-medium">{country.region}</span>
                </li>
                <li className="font-semibold">
                  Sub Region:{" "}
                  <span className="font-medium">{country.subregion}</span>
                </li>
                <li className="font-semibold">
                  Capital:{" "}
                  <span className="font-medium">{country.capital}</span>
                </li>
                <li className="font-semibold">
                  Top Level Domain:{" "}
                  <span className="font-medium">
                    {country.topLevelDomain[0]}
                  </span>
                </li>
                <li className="font-semibold">
                  Currencies:{" "}
                  <span className="font-medium">
                    {country.currencies[0].name}
                  </span>
                </li>
                <li className="font-semibold">
                  Language:{" "}
                  {country.languages.map((language) => (
                    <span className="font-medium" key={language.iso639_2}>
                      {language.name}
                    </span>
                  ))}
                </li>
              </ul>

              <div className="lg:my-16">
                <h3 className="font-semibold my-2 sm:my-4">
                  Border Countries:
                </h3>

                <ul className="flex flex-wrap justify-center">
                  {country.borders.map((border) => (
                    <li
                      className="bg-blue-dark_blue text-white px-3 leading-6 rounded-full text-xs mr-2 mb-1"
                      key={border}
                    >
                      {border}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Country;
