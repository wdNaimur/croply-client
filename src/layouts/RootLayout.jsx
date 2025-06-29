import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import useAuth from "../hooks/useAuth";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  const { loading } = useAuth();
  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className="text-base-content p-5 font-poppins min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
