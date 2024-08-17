import React from "react";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import GalleryImg from "./component/GalleryImg";
import ContactUs from "./pages/Contacts/ContactUs";
import PageNotfound from "./pages/404/PageNotfound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./Layout/Navbar";

function App() {
  /* -------------------------------------------------------------------------- */
  /*                           for navigation purpose                           */
  /* -------------------------------------------------------------------------- */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contacts",
      element: <ContactUs />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },

    {
      path: "*",
      element: <PageNotfound />,
    },
  ]);

  return (
    <div>
      {/* <Gallery /> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
