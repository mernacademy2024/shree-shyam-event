import React from "react";
import { Link } from "react-router-dom";

function PageNotfound() {
  return (
    <div className="flex justify-center items-center flex-col gap-8 bg-lime-500 h-screen w-screen text-red-500">
      <h1 className="text-4xl">Page not found!</h1>
      <Link to={"/"} className="underline text-blue-500">
        GO back
      </Link>
    </div>
  );
}

export default PageNotfound;
