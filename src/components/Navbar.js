import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { MoonIcon, SunIcon } from "../icons";

const Navbar = () => {
  const { darkMode, activeDarkMode } = useContext(MainContext);

  const handleDarkMode = () => {
    activeDarkMode();
  };

  return (
    <div className="relative dark:bg-blue-dark_blue shadow transition duration-200 ease-in">
      <div className="flex justify-between px-5 py-10 max-w-screen-xl m-auto items-center">
        <h1 className="text-lg font-extrabold text-blue-dark_blue dark:text-white">
          Where in the world?
        </h1>

        <div>
          <button
            className="font-semibold p-1 flex items-center hover:bg-gray-very_light_gray focus:outline-none dark:text-white dark:hover:bg-blue-semi_dark_blue rounded transition duration-300 ease-in"
            onClick={handleDarkMode}
          >
            {darkMode ? (
              <>
                <SunIcon />
                <span className="ml-1">Ligth Mode</span>
              </>
            ) : (
              <>
                <MoonIcon />
                <span className="ml-1">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
