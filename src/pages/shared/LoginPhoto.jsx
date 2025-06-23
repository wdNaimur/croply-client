import React from "react";
import loginImage from "/img/authentication/Login.png";
import locationIcon from "/img/authentication/LocationIcon.png";

const LoginPhoto = () => {
  return (
    <div className="max-w-[90%] relative select-none">
      <img src={loginImage} alt="Login image" />
      <img
        className="absolute top-2/8 right-7/16 animate-bounce"
        src={locationIcon}
        alt="Location icon"
      />
    </div>
  );
};

export default LoginPhoto;
