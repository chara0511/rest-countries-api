import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainContext";
import Countries from "./Countries";
import Navbar from "./Navbar";
import MoreCountries from "./MoreCountries";
import Search from "./Search";

const Main = () => {
  const {
    countries,
    countriesToShow,
    error,
    getAllCountries,
    getCountriesToShow,
  } = useContext(MainContext);

  //const [countriesToShow, setCountriesToShow] = useState([]);
  const [next, setNext] = useState(8);

  useEffect(() => {
    getAllCountries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countriesPerPage = 8;

  const loopWithSlice = (start, end) => {
    if (countries) {
      const slicedCountries = countries.slice(start, end);

      getCountriesToShow(slicedCountries);
    }
  };

  useEffect(() => {
    loopWithSlice(0, countriesPerPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  const handleShowMoreCountries = () => {
    loopWithSlice(0, next + countriesPerPage);
    setNext(next + countriesPerPage);
  };

  return (
    <div>
      <Navbar />

      <main className="font-sans bg-gray-very_light_gray dark:bg-blue-semi_dark_blue">
        <div className="max-w-screen-xl m-auto px-5 py-10">
          <Search countries={countriesToShow} />

          {!countriesToShow ? (
            <p className="max-w-screen-xl m-auto">
              {error ? error : "loading..."}
            </p>
          ) : (
            <>
              <Countries countries={countriesToShow} />

              <MoreCountries
                handleShowMoreCountries={handleShowMoreCountries}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Main;
