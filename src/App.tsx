import React from "react";
import Nav from "./component/Nav";
import Body from "./component/Body";
import Footer from "./component/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
