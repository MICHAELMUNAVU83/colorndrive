import React from "react";
import herobg from "/herobg.png";
import navbar from "/navbar.png";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${herobg})` }}
      className="md:h-[100vh]  bg-cover bg-center "
    >
      <div className="bg-white/50 h-[100vh] gap-16 flex flex-col ">
        <div className="mt-12 md:w-[80%] w-[95%] mx-auto  relative">
          <img
            src="/navbar.png"
            alt=""
            className="w-[100%] md:h-[114px] h-[80px] mx-auto md:mt-12 mt-0"
          />
          <div className="absolute top-1/2 left-1/2 transform w-[100%] flex justify-center items-center md:p-16  p-12 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="flex flex-row md:mt-8 mt-2 w-[100%] justify-between items-center">
              <img
                src="/logo.png"
                alt=""
                className="md:w-[122px] w-[80px] object-contain  h-[20px] md:h-[37px] "
              />
              <div className="flex md:gap-8 gap-2 md:text-xl text-xs items-center">
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
              </div>

              <div className="hidden md:block">
                <button className="bg-[#FB0000] text-white px-8 py-2 rounded-md">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <p className="tex-xl">Auto Detailing</p>
          <p className="text-3xl font-semibold">
            Effective and <span className="text-[#F50606]">Powerful</span>
          </p>
          <p className="md:w-[640px] w-[80%] md:text-xl  text-center">
            Discover the ultimate car detailing experience with our professional
            services, offering everything from exterior and interior detailing
            to paint correction and ceramic coating
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="bg-black text-white px-8 py-2 rounded-md">
              Our Services
            </button>

            <button className="border-[#FB0000] text-[#FB0000] border-2  px-8 py-2 rounded-md">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
