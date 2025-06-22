import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon }) => {
  const cardRef = useRef();
  const [coords, setCoords] = useState({ x: -9999, y: -9999 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: -9999, y: -9999 }); // Hide
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-xl p-6 shadow-lg cursor-default bg-base-200 text-secondary overflow-hidden"
    >
      {/* Glow Layer */}
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: isHovered ? 2 : 1, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 z-0 rounded-xl"
      >
        <div
          className="absolute h-20 w-20 rounded-full bg-green-200 blur-2xl transition-transform duration-75"
          style={{
            left: coords.x,
            top: coords.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mb-4 flex justify-center">{icon}</div>
      <h3 className="relative z-10 font-semibold text-center mb-3">{title}</h3>
      <p className="relative z-10 text-sm text-center opacity-80">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
