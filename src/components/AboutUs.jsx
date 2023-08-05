import React from "react";
import aboutusbg from "/aboutusbg.png";
import aboutuspic from "/aboutuspic.png";

const AboutUs = () => {
  return (
    <div className="h-[100vh] bg-black flex flex-col justify-around gap-4 items-center ">
      <div className="flex flex-col w-[100%] justify-center items-center">
        <p className="text-xl text-white md:text-2xl">About Us</p>
        <p className="bg-[#FB0000] md:w-[30%] w-[80%] h-[3px]"></p>
      </div>
      <div className="flex justify-around">
        <div
          style={{ backgroundImage: `url(${aboutusbg})` }}
          className="bg-cover bg-center h-[434px] md:w-[461px] w-[320px] flex justify-end items-end"
        >
          <img
            src={aboutuspic}
            alt=""
            className="md:h-[252px] h-[280px] -m-8 md:w-[354px] w-[210px] object-cover"
          />
        </div>

        <div className="flex flex-col w-[50%] text-start justify-center items-center gap-4">
          <p className="text-white ">
            Experience the ultimate in car detailing excellence at Color &
            Drive. With a genuine passion for cars, our dedicated team of
            professionals goes above and beyond to deliver exceptional services.
            Using cutting-edge techniques and premium products, we restore your
            vehicle to its pristine condition. Our customizable packages cater
            to your unique requirements, ensuring a tailored experience. From
            initial contact to the moment you drive away, our commitment to
            outstanding customer service is unwavering. Discover the
            transformative power of our exceptional car detailing services by
            scheduling an appointment with Color & Drive today.
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="p-2 bg-[#FB0000] rounded-md text-white">
              Call To Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
