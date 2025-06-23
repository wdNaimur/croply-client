import React from "react";
import CroplyLogo from "../shared/CroplyLogo";

const SignIn = () => {
  return (
    <div className="relative flex justify-center items-center bg-base-200">
      <div className="absolute top-5 left-5">
        <CroplyLogo />
      </div>

      <div>signin form</div>
    </div>
  );
};

export default SignIn;
