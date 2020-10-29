import React from "react";
import { MoonIcon } from "../icons";

const Navbar = () => {
  return (
    <div className="flex justify-between px-5 py-10">
      {/*tablet:  px-8 py-12 */}
      <h1 className="text-lg font-extrabold text-blue-dark_blue">
        Where in the world?
      </h1>

      <div>
        <button className="font-semibold flex">
          <span className="mr-1">
            <MoonIcon />
          </span>{" "}
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
