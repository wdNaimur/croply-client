import React, { useState } from "react";
import LeftHeading from "../shared/LeftHeading";
import SearchBox from "../shared/SearchBox";
import CoverageMap from "./CoverageMap";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";

const CoveragePage = () => {
  const data = useLoaderData();
  const [searchPosition, setSearchPosition] = useState(null);

  const handleSearch = (query) => {
    const matched = data.find((item) =>
      item.city.toLowerCase().includes(query.toLowerCase())
    );
    if (matched) {
      setSearchPosition([matched.latitude, matched.longitude]);
    } else {
      toast.error("No matching city found");
    }
  };

  return (
    <section className="my-8 container mx-auto px-4">
      <div className="p-10 bg-base-200 rounded-2xl">
        <LeftHeading title={`We are available in 64 District`} />

        {/* Search box */}
        <div className="mb-6">
          <SearchBox onSearch={handleSearch} />
        </div>

        <CoverageMap data={data} searchPosition={searchPosition} />
      </div>
    </section>
  );
};

export default CoveragePage;
