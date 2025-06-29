import React from "react";
import { Link, Outlet } from "react-router";
import LoginPhoto from "../pages/shared/LoginPhoto";
import CroplyLogo from "../pages/shared/CroplyLogo";
import useAuth from "../hooks/useAuth";

const AuthenticationLayout = () => {
  const { loading, user } = useAuth();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <p>
        Already logged In{" "}
        <button>
          <Link className="btn btn-primary text-base-200" to="/">
            Go to home
          </Link>
        </button>
      </p>
    );
  }
  return (
    <div className="text-base-content font-poppins min-h-screen grid grid-cols-1 lg:grid-cols-2 relative">
      <Toaster />
      <div className="absolute top-5 left-5 z-10">
        <CroplyLogo />
      </div>
      <div className="flex items-center justify-center  bg-base-200">
        <Outlet />
      </div>
      <div className="flex items-center justify-center bg-base-100">
        <LoginPhoto />
      </div>
    </div>
  );
};

export default AuthenticationLayout;
