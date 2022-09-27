import React from "react";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import { auth } from "../../../../../backend/Firebase/Firebase-config.js";
import {useAuthState} from "react-firebase-hooks/auth";

const NavbarChat = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return(
    <div className="chat-navbar">
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default NavbarChat;
