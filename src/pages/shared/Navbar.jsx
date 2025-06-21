import React from "react";
import { Link, NavLink } from "react-router";
import CroplyLogo from "./CroplyLogo";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          className="px-0 rounded-none mx-4 hover:font-bold hover:bg-transparent"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-0 rounded-none mx-4 hover:font-bold hover:bg-transparent"
          to="/about"
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200/60 rounded-2xl p-2 px-4 backdrop-blur-xl sticky top-5 z-50 border border-base-200/80 shadow-xl shadow-primary/5">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" pr-2 lg:hidden cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <CroplyLogo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu px-0 menu-horizontal">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-primary text-white rounded-xl border-none shadow-none">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
