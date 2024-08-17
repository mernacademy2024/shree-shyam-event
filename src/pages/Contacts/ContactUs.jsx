import React from "react";
import WithLayout from "../../Layout/WithLayout";

function ContactUs() {
  return (
    <div className="flex justify-center items-center bg-yellow-500 h-screen w-screen text-white">
      <h1 className="text-4xl">Contact us </h1>
    </div>
  );
}

export default WithLayout(ContactUs);
