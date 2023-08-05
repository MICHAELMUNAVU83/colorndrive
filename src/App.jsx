import { useState } from "react";

import "./App.css";
import Steps from "./components/Steps";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
function App() {
  return (
    <div>
      <AboutUs />
      <Services />
      <Steps />
      <WhyUs />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
