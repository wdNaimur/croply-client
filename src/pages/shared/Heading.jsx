import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center px-4  mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold font-league-spartan mb-2 text-primary">
        {title}
      </h2>
      <p className="opacity-80">{subtitle}</p>
    </div>
  );
};

export default Heading;

// Use
/*
<Heading
  title={`Testimonials`}
  subtitle={`Trusted by farmers, buyers, and delivery heroes across the country.`}
></Heading>;
*/
