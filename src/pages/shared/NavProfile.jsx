import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const NavProfile = () => {
  const { logOut } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);
  const handleSignOut = () => {
    setLoggingOut(true);
    logOut();
    setLoggingOut(false);
  };
  return (
    <div className="flex items-center gap-2">
      <p>user info</p>
      <button
        className="btn btn-secondary text-base-200 border-none shadow-none"
        onClick={handleSignOut}
      >
        {loggingOut ? "Signing Out" : "Sign Out"}
      </button>
    </div>
  );
};

export default NavProfile;
