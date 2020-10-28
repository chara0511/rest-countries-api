import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-5 py-10 ">
        {/*tablet:  px-8 py-12 */}
        <h1 className="font-extrabold text-blue-dark_blue">
          Where in the world?
        </h1>
        <div>
          <p className="font-semibold">
            <span>icon</span> Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
