import React from "react";

const LeftHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <h2 className="text-3xl lg:text-5xl font-bold font-league-spartan mb-1 text-primary">
        {title}
      </h2>
      <p className="opacity-80 text-sm">{subtitle}</p>
    </div>
  );
};

export default LeftHeading;

// Use
/*
<Heading
  title={`Testimonials`}
  subtitle={`Trusted by farmers, buyers, and delivery heroes across the country.`}
></Heading>;
*/
