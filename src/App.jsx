import { useState } from "react";

import "./App.css";
import test from "/test.jpg";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${test})` }}
      className=" w-[100%] h-[100vh] bg-cover bg-no-repeat bg-center"
    >
      <div class="bg-black/50 h-[100vh] flex flex-col justify-center items-center">
        <p className="text-white text-2xl md:text-5xl">
          We are building something cool for colorndrive
        </p>
      </div>
    </div>
  );
}

export default App;
