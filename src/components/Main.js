import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import Countries from "./Countries";
import Navbar from "./Navbar";
import Search from "./Search";

const Main = () => {
  const { countries, getAllCountries } = useContext(MainContext);

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <Navbar />

      <Search />

      {!countries ? "loading" : <Countries countries={countries} />}
    </>
  );
};

export default Main;
