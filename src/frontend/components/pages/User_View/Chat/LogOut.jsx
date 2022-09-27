import React from "react";
import { auth } from "../../../../../backend/Firebase/Firebase-config.js";

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <button onClick={() => auth.signOut()}>
      Logout
    </button>
  );
};

export default LogOut;
