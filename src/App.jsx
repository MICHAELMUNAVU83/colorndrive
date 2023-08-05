import { useState } from "react";

import "./App.css";
import Steps from "./components/Steps";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
function App() {
  return (
    <div>
      <Steps />
      <WhyUs />
      <Reviews />
    </div>
  );
}

export default App;
