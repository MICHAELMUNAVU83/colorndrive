import React from "react";
import stepsbg from "/stepsbg.png";

const Steps = () => {
  return (
    <div
      className="bg-cover w-[100%] bg-center min-h-[100vh]"
      style={{
        backgroundImage: `url(${stepsbg})`,
      }}
    >
      <div className="bg-white/30 h-[100%] w-[100%]  flex flex-col items-center">
        <div className="flex flex-col w-[100%] justify-center items-center">
          <p className="text-xl md:text-2xl">Easy Quick Following Steps</p>
          <p className="bg-[#FB0000] md:w-[30%] w-[80%] h-[3px]"></p>
        </div>
        <div className="flex md:flex-row flex-col justify-between p-4 w-[100%">
          <div className="flex flex-col md:w-[30%] items-center">
            <img
              src="/step1.png"
              alt=""
              className="h-[526px] w-[100%] object-contain"
            />
          </div>
          <div className="flex flex-col md:w-[30%] items-center">
            <img
              src="/step2.png"
              alt=""
              className="h-[526px] w-[100%] object-contain"
            />
          </div>
          <div className="flex flex-col md:w-[30%] items-center">
            <img
              src="/step3.png"
              alt=""
              className="h-[526px] w-[100%] object-contain"
            />
          </div>
        </div>
        <div className="flex  flex-col justify-center items-center p-4 w-[100%">
          <img
            src="/step4.png"
            alt=""
            className="h-[526px] w-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
