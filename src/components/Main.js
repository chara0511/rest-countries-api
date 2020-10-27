import React from "react";
import Countries from "./Countries";
import Navbar from "./Navbar";
import Search from "./Search";

const Main = () => {
  const countries = [
    {
      id: 1,
      name: "Germany",
      population: 81770900,
      region: "Europe",
      capital: "Berlin",
    },
    {
      id: 2,
      name: "United States of America",
      population: 81770900,
      region: "Europe",
      capital: "Berlin",
    },
    {
      id: 3,
      name: "Brazil",
      population: 81770900,
      region: "Europe",
      capital: "Berlin",
    },
    {
      id: 4,
      name: "Icelan",
      population: 81770900,
      region: "Europe",
      capital: "Berlin",
    },
    {
      id: 5,
      name: "Afghanistan",
      population: 81770900,
      region: "Europe",
      capital: "Berlin",
    },
    {
      id: 6,
      name: "Aland Islands",
      population: 81770900,
      region: "Europe",
      capital: "Berlin",
    },
    {
      id: 7,
      name: "Albania",
      population: 81770900,
      region: "Europe",
      capital: "Berlin",
    },
    {
      id: 8,
      name: "Algeria",
      population: 81770900,
      region: "Europe",
      capital: "Berlin",
    },
  ];

  return (
    <>
      <Navbar />

      <Search />

      <Countries countries={countries} />
    </>
  );
};

export default Main;
