import React from "react";
import CroplyLogo from "./CroplyLogo";

const Footer = () => {
  return (
    <footer className="footer footer-center footer-horizontal text-base-200 p-10 rounded-2xl relative  bg-gradient-to-br from-secondary via-secondary/90 to-primary">
      <aside className="mb-6">
        <CroplyLogo />
        <p className="font-medium opacity-90">
          Croply – Smart Agro Connect
          <br />
          Empowering farmers & delivering freshness since 2024
        </p>
        <p className="opacity-70">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>

      <nav></nav>
    </footer>
  );
};

export default Footer;
