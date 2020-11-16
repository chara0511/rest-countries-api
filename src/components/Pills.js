import React from "react";
import Pill from "./Pill";

const Pills = ({ pills, handleActivePill }) => {
  return (
    <ul className="flex my-3 md:my-0 md:mx-3">
      {pills.map((pill, i) => (
        <Pill key={i} pill={pill} handleActivePill={handleActivePill} />
      ))}
    </ul>
  );
};

export default Pills;
