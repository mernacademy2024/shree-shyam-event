import React from "react";
import WithLayout from "../../Layout/WithLayout";
import Gallery from "../../component/portfolio/Gallery";

function Portfolio() {
  return (
    <div className="flex justify-center items-center  h-screen w-screen text-white">
      <Gallery />
    </div>
  );
}

export default WithLayout(Portfolio);
