import React from "react";
import reviewsbg from "/reviewsbg.png";

const Reviews = () => {
  return (
    <div
      className="bg-cover w-[100%] bg-center min-h-[80vh]"
      style={{
        backgroundImage: `url(${reviewsbg})`,
      }}
    >
      <div className="bg-white/30 h-[100%] py-12 w-[100%]  flex flex-col justify-center items-center">
        <div className="flex flex-col w-[100%] justify-center items-center">
          <p className="text-xl md:text-2xl">Customers Says</p>
          <p className="bg-[#FB0000] md:w-[30%] w-[80%] h-[3px]"></p>
        </div>

        <div className="flex md:flex-row flex-col  justify-between p-4 w-[100%]">
          <div className="bg-[#F3F4F6]/50 p-2 flex h-[400px]  justify-between flex-col md:w-[30%]">
            <div className="flex justify-start p-2 items-start">
              <img
                src="/blackquotes.png"
                alt=""
                className="h-[24px] w-[24px] object-contain"
              />
            </div>
            <div className="w-[90%] text-center mx-auto">
              Car & Drive Auto Detailing exceeded all my expectations with their
              outstanding service! From the moment I entered, their friendly
              staff made me feel welcome. Their attention to detail was
              remarkable as they diligently cleaned every corner of my car,
              leaving it looking and smelling brand new. The skilled technicians
              used top-of-the-line products, resulting in a gleaming exterior
              and revitalized interior.
            </div>
            <div className="gap-2 flex items-center">
              <p className="w-[150px] bg-[#FB0000] h-[2px]" />

              <p className="P-4">Michael Munavu</p>
            </div>
          </div>

          <div className="bg-black p-2  flex h-[400px]  justify-between flex-col md:w-[30%]">
            <div className="flex justify-start p-2 items-start">
              <img
                src="/whitequotes.png"
                alt=""
                className="h-[24px] w-[24px] object-contain"
              />
            </div>
            <div className="w-[90%] text-white text-center mx-auto">
              Car & Drive Auto Detailing exceeded all my expectations with their
              outstanding service! From the moment I entered, their friendly
              staff made me feel welcome. Their attention to detail was
              remarkable as they diligently cleaned every corner of my car,
              leaving it looking and smelling brand new. The skilled technicians
              used top-of-the-line products, resulting in a gleaming exterior
              and revitalized interior.
            </div>
            <div className="gap-2 flex items-center">
              <p className="w-[150px] bg-[#FB0000] h-[2px]" />

              <p className="text-white">Michael Munavu</p>
            </div>
          </div>

          <div className="bg-[#F3F4F6]/50 p-2 flex h-[400px]  justify-between flex-col md:w-[30%]">
            <div className="flex justify-start p-2 items-start">
              <img
                src="/blackquotes.png"
                alt=""
                className="h-[24px] w-[24px] object-contain"
              />
            </div>
            <div className="w-[90%] text-center mx-auto">
              Car & Drive Auto Detailing exceeded all my expectations with their
              outstanding service! From the moment I entered, their friendly
              staff made me feel welcome. Their attention to detail was
              remarkable as they diligently cleaned every corner of my car,
              leaving it looking and smelling brand new. The skilled technicians
              used top-of-the-line products, resulting in a gleaming exterior
              and revitalized interior.
            </div>
            <div className="gap-2 flex items-center">
              <p className="w-[150px] bg-[#FB0000] h-[2px]" />

              <p className="P-4">Michael Munavu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
