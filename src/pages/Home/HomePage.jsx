import React from "react";
import Banner from "./Banner/Banner";
import HowItWorks from "./howItWorks/HowItWorks";
import OurServices from "./ourServices/OurServices";
import Testimonial from "./Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <div className="my-8">
        <Banner />
      </div>
      <div className="my-8 container mx-auto sm:px-10">
        <HowItWorks />
      </div>
      <div className="my-8 container mx-auto sm:px-10">
        <OurServices />
      </div>
      <div className="my-8">
        <Testimonial />
      </div>
    </>
  );
};

export default HomePage;
