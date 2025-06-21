import React from "react";
import {
  FaBoxOpen,
  FaTruck,
  FaGlobe,
  FaWarehouse,
  FaMoneyBillWave,
  FaUndo,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Express & Standard Delivery",
    description: `We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.`,
    icon: <FaTruck className="text-4xl" />, // delivery truck icon
  },
  {
    title: "Nationwide Delivery",
    description: `We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.`,
    icon: <FaGlobe className="text-4xl" />, // globe icon for nationwide
    highlight: true,
  },
  {
    title: "Fulfillment Solution",
    description: `We also offer customized service with inventory management support, online order processing, packaging, and after sales support.`,
    icon: <FaWarehouse className="text-4xl" />, // warehouse icon
  },
  {
    title: "Cash on Home Delivery",
    description: `100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.`,
    icon: <FaMoneyBillWave className="text-4xl" />, // money/cash icon
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description: `Customized corporate services which includes warehouse and inventory management support.`,
    icon: <FaBoxOpen className="text-4xl" />, // keep box open for corporate service
  },
  {
    title: "Parcel Return",
    description: `Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.`,
    icon: <FaUndo className="text-4xl" />, // undo/return icon
  },
];

const OurServices = () => {
  return (
    <section className="rounded-2xl p-10 text-base-200 bg-secondary">
      <div className="mb-12 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold font-league-spartan mb-2 text-base-200">
          Our Services
        </h2>
        <p className="opacity-80">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8 gap-4">
        {services.map(({ title, description, icon, highlight }, i) => (
          <ServiceCard
            key={i}
            title={title}
            description={description}
            icon={icon}
            highlight={highlight}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
