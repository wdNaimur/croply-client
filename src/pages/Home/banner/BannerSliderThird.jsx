import React from "react";

const BannerSliderThird = () => {
  return (
    <div
      className="hero rounded-2xl overflow-hidden 2xl:min-h-[600px] xl:min-h-[550px] min-h-[500px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/F4p31NBw/Hero-image-3.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center py-16">
        <div className="max-w-xl px-4">
          <h1 className="mb-5 text-5xl font-bold">Smart Farming Starts Here</h1>
          <p className="mb-5">
            From seeds to sales, Croply helps streamline your farming business
            with tech-driven solutions.
          </p>
          <button className="btn btn-primary text-base-200">Join Croply</button>
        </div>
      </div>
    </div>
  );
};

export default BannerSliderThird;
