import React from "react";
import LeftHeading from "../shared/LeftHeading";

const CoveragePage = () => {
  return (
    <section className="my-8">
      <div className="p-10 bg-base-200 rounded-2xl">
        <LeftHeading title={`We are available in 64 District`} />

        {/* Search box */}
        <div className="relative w-sm">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 w-full 
    focus-within:ring-0 focus-within:outline-none focus-within:border-0"
          >
            <svg
              className="h-[1.5em] opacity-80 text-primary select-none pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow text-secondary bg-transparent outline-none border-none"
              placeholder="Search"
            />
          </div>
          <button className="btn btn-primary rounded-full text-base-200 absolute right-0 top-0 z-10 shadow-none border-none">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoveragePage;
