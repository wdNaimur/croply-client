import React from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";
import HowItWorksCard from "./HowItWorksCard";

const steps = [
  {
    title: "Browse Fresh Products",
    description:
      "Explore a wide range of farm-fresh items from trusted local farmers.",
    icon: <FiSearch className="text-primary text-4xl" />,
  },
  {
    title: "Place Your Order",
    description:
      "Add items to your cart and confirm your order in just a few clicks.",
    icon: <FiShoppingCart className="text-primary text-4xl" />,
  },
  {
    title: "Fast Delivery",
    description:
      "Receive your products quickly with our smart delivery system.",
    icon: <FiTruck className="text-primary text-4xl" />,
  },
  {
    title: "Enjoy Freshness",
    description: "Savor the fresh farm products delivered right to your door.",
    icon: <FiCheckCircle className="text-primary text-4xl" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 rounded-2xl font-urbanist">
      <div className="mb-12 text-center px-4  mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold font-league-spartan mb-2 text-primary">
          How Croply Works
        </h2>
        <p className="opacity-80">
          Explore the seamless process that connects you with fresh farm
          products
        </p>
      </div>
      <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <HowItWorksCard key={index} step={step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
