import React from "react";
import { Outlet } from "react-router";
import LoginPhoto from "../pages/shared/LoginPhoto";

const AuthenticationLayout = () => {
  return (
    <div className="text-base-content font-poppins min-h-screen grid lg:grid-cols-2 justify-center">
      <Outlet />
      <div className="flex-1 bg-base-100 grid items-center justify-center">
        <LoginPhoto />
      </div>
    </div>
  );
};

export default AuthenticationLayout;
