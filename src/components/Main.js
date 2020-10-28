import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import Countries from "./Countries";
import Navbar from "./Navbar";
import Search from "./Search";

const Main = () => {
  const { countries, getAllCountries } = useContext(MainContext);

  useEffect(() => {
    getAllCountries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      <main className="font-sans px-5 py-10 bg-gray-very_light_gray">
        <Search />

        {!countries ? "loading" : <Countries countries={countries} />}
      </main>
    </>
  );
};

export default Main;
