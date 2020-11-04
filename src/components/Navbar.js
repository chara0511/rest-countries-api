import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { MoonIcon, SunIcon } from "../icons";

const Navbar = () => {
  const { darkMode, activeDarkMode } = useContext(MainContext);
  const handleDarkMode = () => {
    activeDarkMode();
  };
  return (
    <div className="relative dark:bg-blue-dark_blue shadow-normal">
      <div className="flex justify-between px-5 py-10 max-w-screen-xl m-auto">
        {/*tablet:  px-8 py-12 */}
        <h1 className="text-lg font-extrabold text-blue-dark_blue  dark:text-white">
          Where in the world?
        </h1>

        <div>
          <button
            className="font-semibold flex dark:text-white"
            onClick={handleDarkMode}
          >
            <span className="mr-1">
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </span>
            Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
