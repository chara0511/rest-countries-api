import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import Navbar from "./Navbar";

const Country = () => {
  const { country, getCountryByCode } = useContext(MainContext);

  const params = useParams();

  useEffect(() => {
    getCountryByCode(params.id);
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <Link to={"/"}>{"<= Back"}</Link>

        {!country ? (
          "loading"
        ) : (
          <div>
            <img src={country.flag} alt="" />

            <div>
              <h1>{country.name}</h1>

              <div>
                <p>Native Name: {country.nativeName}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
                <p>Top Level Domain: {country.topLevelDomain[0]}</p>
                <p>Currencies: {country.currencies[0].name}</p>
                <p>
                  Language:{" "}
                  {country.languages.map((language) => `${language.name}, `)}
                </p>
              </div>

              <div>
                <h3>Border Countries:</h3>
                <ul>
                  {country.borders.map((border) => (
                    <li>{border}</li>
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
