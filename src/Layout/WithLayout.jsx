// Layout.js
import React from "react";
import Navbar from "./Navbar";
import ChatBtn from "../component/ChatBtn";

const WithLayout = (WrappedComponent) => {
  return (props) => (
    <div>
      <Navbar />
      <WrappedComponent {...props} />
      <ChatBtn />
    </div>
  );
};

export default WithLayout;
