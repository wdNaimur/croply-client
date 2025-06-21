import React from "react";

const HowItWorksCard = ({ step }) => {
  return (
    <div className="bg-base-200 rounded-xl p-6 shadow-xl flex flex-col items-start gap-4 shadow-primary/5 w-full">
      <div className="-mb-2">{step.icon}</div>
      <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
      <p className="text-sm">{step.description}</p>
    </div>
  );
};

export default HowItWorksCard;
