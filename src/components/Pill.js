import React from "react";
import { CloseIcon } from "../icons";

const Pill = ({ pill, handleActivePill }) => {
  return (
    <>
      {pill.active && (
        <li className="relative flex items-center h-8">
          <input
            className="bg-blue-dark_blue text-white cursor-pointer px-2 py-1 rounded-full text-xs mr-2"
            type="button"
            value={pill.value}
            onClick={handleActivePill}
          />

          <CloseIcon />
        </li>
      )}
    </>
  );
};

export default Pill;
