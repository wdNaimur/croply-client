import React from "react";
import { Link } from "react-router";

const CroplyLogo = () => {
  return (
    <Link to="/" className="relative select-none">
      <img
        className="absolute h-6 -top-[7px] left-[35px] z-0"
        src="/CroplyIcon.png"
        alt="CroplyLogo"
      />
      <h6 className="font-bold font-league-spartan text-4xl relative z-10">
        Croply
      </h6>
    </Link>
  );
};

export default CroplyLogo;
