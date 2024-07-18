import React, { useState } from "react";
import Hero from "./components/Hero";
import Specialization from "./components/Specialization";
import Clients from "./components/Clients";
import Pasale from "./components/Pasale";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Emergency from "./components/Emergency";
import useDynamicCSSImport from "./utils/useDynamicCss";

const App = () => {
  const [show, setShow] = useState(false);

  const urlToCssMap = {
    // Add more URL-CSS mappings as needed
    "machhu.netlify.app": "netlify.css",
  };

  useDynamicCSSImport(urlToCssMap);

  const showCloseMenu = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? <MobileMenu show={show} /> : null}
      <Navbar showCloseMenu={showCloseMenu} show={show} />
      <Hero />
      <Specialization />
      <Emergency />
      <Clients />
      <Pasale />
      <Footer />
    </>
  );
};

export default App;
