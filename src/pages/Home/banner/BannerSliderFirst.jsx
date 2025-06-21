import React from "react";

const BannerSliderFirst = () => {
  return (
    <div
      className="hero rounded-2xl overflow-hidden 2xl:min-h-[600px] xl:min-h-[550px] min-h-[500px]"
      style={{
        backgroundImage: `url("https://i.ibb.co/4Z4FHrh0/Hero-image-1.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center py-16">
        <div className="max-w-xl px-4">
          <h1 className="mb-5 text-5xl font-bold">
            Connecting Farmers to Markets
          </h1>
          <p className="mb-5">
            Croply empowers local farmers by delivering their harvests directly
            to nationwide buyers.
          </p>
          <button className="btn btn-primary text-base-200">
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSliderFirst;
