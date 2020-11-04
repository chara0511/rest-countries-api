import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import Countries from "./Countries";
import Navbar from "./Navbar";
import Search from "./Search";

const Main = () => {
  const { countries, error, getAllCountries } = useContext(MainContext);

  useEffect(() => {
    getAllCountries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />

      <main className="font-sans bg-gray-very_light_gray dark:bg-blue-semi_dark_blue">
        <div className="max-w-screen-xl m-auto px-5 py-10">
          <Search />

          {!countries ? (
            <p className="max-w-screen-xl m-auto">
              {error ? error : "loading..."}
            </p>
          ) : (
            <Countries countries={countries} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Main;
