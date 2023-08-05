import { useState } from "react";

import "./App.css";
import Steps from "./components/Steps";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Steps />
      <WhyUs />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
