import React from "react";

const Pill = ({ pill }) => {
  return (
    <>
      {pill.active && (
        <li>
          <button className="bg-blue-dark_blue text-white px-2 py-1 rounded-full text-xs mr-2">
            {pill.value} x
          </button>
        </li>
      )}
    </>
  );
};

export default Pill;
