import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.search.value.trim();
    if (query) {
      onSearch?.(query); // Call parent handler
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-md ">
      <div
        className="flex items-center gap-2 px-4 py-2 pr-24 rounded-full bg-primary/20 w-full 
        focus-within:ring-0 focus-within:outline-none focus-within:border-0"
      >
        <span
          className="text-primary text-2xl cursor-pointer"
          onClick={focusInput}
        >
          <BiSearch />
        </span>
        <input
          ref={inputRef}
          type="search"
          name="search"
          className="grow text-secondary bg-transparent outline-none border-none"
          placeholder="Search city or district"
        />
      </div>

      {/* Search button */}
      <button
        type="submit"
        className="bg-primary h-full font-medium absolute top-1/2 right-0 hover:-translate-y-1/2 active:-translate-y-1/2 -translate-y-1/2 px-4 py-1.5 text-sm rounded-full text-base-100 cursor-pointer transition-transform duration-200 shadow-md hover:bg-primary/90 shadow-primary/20 active:shadow-sm"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
