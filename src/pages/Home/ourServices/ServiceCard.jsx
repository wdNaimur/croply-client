import React from "react";

const ServiceCard = ({ title, description, icon, highlight }) => {
  return (
    <div
      className="
        rounded-xl p-6 shadow-lg cursor-pointer transition-colors duration-300
        bg-base-200 text-secondary hover:bg-gradient-to-br hover:from-base-100 hover:via-base-200 hover:to-primary/40 
      "
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3
        className={`font-semibold text-center mb-3 ${
          highlight ? "font-bold" : ""
        }`}
      >
        {title}
      </h3>
      <p className="text-sm text-center opacity-80">{description}</p>
    </div>
  );
};

export default ServiceCard;
