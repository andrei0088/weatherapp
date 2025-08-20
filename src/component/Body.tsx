import React from "react";
import Meteo from "./Meteo";
import About from "./About";
import Contact from "./Contact";
import OtherMeteo from "./OtherMeteo";

const Body = () => {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Meteo;
      break;
    case "/about":
      Component = About;
      break;
    case "/contact":
      Component = Contact;
      break;
    case "/weather":
      Component = OtherMeteo;
      break;
    default:
      Component = Meteo; // Fallback to Home if no match
  }
  return (
    <div style={{ minHeight: "50%" }}>
      <Component />
    </div>
  );
};

export default Body;
