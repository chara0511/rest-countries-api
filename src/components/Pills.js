import React from "react";
import Pill from "./Pill";

const Pills = ({ pills }) => {
  return (
    <ul className="flex justify-center my-3 md:my-0 md:mx-3">
      {pills.map((pill, i) => (
        <Pill key={i} pill={pill} />
      ))}
    </ul>
  );
};

export default Pills;
