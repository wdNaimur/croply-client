import React from "react";

const BannerSliderSecond = () => {
  return (
    <div
      className="hero rounded-2xl overflow-hidden 2xl:min-h-[600px] xl:min-h-[550px] min-h-[500px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/0jDy7yBt/Hero-image-2.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center py-16">
        <div className="max-w-xl px-4">
          <h1 className="mb-5 text-5xl font-bold">
            Fresh Produce, Delivered Fast
          </h1>
          <p className="mb-5">
            Get farm-fresh fruits and vegetables from trusted sources, right to
            your doorstep.
          </p>
          <button className="btn btn-primary text-base-200">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default BannerSliderSecond;
