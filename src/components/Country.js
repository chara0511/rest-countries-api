import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Country = () => {
  return (
    <>
      <Navbar />

      <div>
        <Link to={"/"}>{"<= Back"}</Link>

        <div>
          <p>image</p>

          <div>
            <h1>Belgium</h1>

            <div>
              <p>Native Name: Belgie</p>
              <p>Population: 11, 319,511</p>
              <p>Region: Europe</p>
              <p>Sub Region: Western Europe</p>
              <p>Capital: Brussels</p>
              <p>Top Level Domain: .be</p>
              <p>Currencies: Euro</p>
              <p>Language: Dutch, French, German</p>
            </div>

            <div>
              <h3>Border Countries:</h3>
              <ul>
                <li>France</li>
                <li>Germany</li>
                <li>Netherlands</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
