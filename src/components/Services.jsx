import React from "react";
import servicesbg from "/servicesbg.png";

const Services = () => {
  const services = [
    {
      id: 1,
      image: "/services1.png",
      title: "Gerneral Car services",
      content:
        "Our skilled team provides meticulous    cleaning and restoration for both the  exterior and interior of your car, along    with specialized treatments   ",
    },
    {
      id: 2,
      image: "/services3.png",
      title: "Interior& Exterior wash",
      content:
        "Our skilled team provides meticulous    cleaning and restoration for both the  exterior and interior of your car, along    with specialized treatments   ",
    },
    {
      id: 3,
      image: "/services3.png",
      title: "Wrap",
      content:
        "Our skilled team provides meticulous    cleaning and restoration for both the  exterior and interior of your car, along    with specialized treatments   ",
    },
    {
      id: 4,
      image: "/services4.png",
      title: "Tint",
      content:
        "Our skilled team provides meticulous    cleaning and restoration for both the  exterior and interior of your car, along    with specialized treatments   ",
    },
    {
      id: 5,
      image: "/services5.png",
      title: "Steam Wash",
      content:
        "Our skilled team provides meticulous    cleaning and restoration for both the  exterior and interior of your car, along    with specialized treatments   ",
    },
    {
      id: 6,
      image: "/services6.png",
      title: "Alignment",
      content:
        "Our skilled team provides meticulous    cleaning and restoration for both the  exterior and interior of your car, along    with specialized treatments   ",
    },
  ];
  return (
    <div
      className="md:h-[1582px] relative "
      style={{ backgroundImage: `url(${servicesbg})` }}
    >
      <div class="bg-white  rounded-md shadow-md shadow-gray-300 absolute flex  left-1/2 transform h-[253px]  -translate-x-1/2 -translate-y-1/2  w-[80%]">
        <div className="w-[30%] h-[253px] text-xl font-bold  flex flex-col justify-center items-center">
          Our Open days
        </div>
        <div className="w-[40%] bg-[#FB0000]/90 h-[253px]  flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-row justify-between  text-xl  text-white border-b-2 border-white w-[60%] items-center">
            <p className=" font-normal">Monday - Friday</p>
            <p className=" font-normal">8:00-18:00</p>
          </div>
          <div className="flex flex-row justify-between  text-xl  text-white border-b-2 border-white w-[60%] items-center">
            <p className=" font-normal">Saturday</p>
            <p className=" font-normal">8:00-18:00</p>
          </div>
          <div className="flex flex-row justify-between  text-xl  text-white border-b-2 border-white w-[60%] items-center">
            <p className=" font-normal">Sunday</p>
            <p className=" font-normal">8:00-18:00</p>
          </div>

          <div className="flex flex-row justify-between  text-xl  text-white border-b-2 border-white w-[60%] items-center">
            <p className=" font-normal">Holiday</p>
            <p className=" font-normal">8:00-18:00</p>
          </div>
        </div>
        <div className="w-[30%] rounded-md  h-[253px]  flex flex-col justify-center items-center">
          <div className="h-[50%] text-white w-[100%] flex flex-col justify-center items-center bg-[#FB0000]/80 ">
            <div className="flex gap-2 items-center">
              <img src="/tiktok.png" className="w-[24px] h-[24px]" />
              <div className="gap-2  border-b-2 border-white p-2 flex flex-col">
                <p>Call for Appoinment</p>
                <p>+254789045</p>
              </div>
            </div>
          </div>
          <div className="h-[50%] text-white flex flex-col justify-center items-center w-[100%] bg-[#FB0000] ">
            <div className="flex gap-2 items-center">
              <img src="/tiktok.png" className="w-[24px] h-[24px]" />
              <div className="gap-2  border-b-2 border-white p-2 flex flex-col">
                <p>Send Us an Email</p>
                <p>color&drive@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100%] justify-center  gap-12 md:px-12 md:py-48 p-5 items-center">
        <div className="flex flex-col w-[100%] justify-center items-center">
          <p className="text-xl md:text-2xl">Our Services</p>
          <p className="bg-[#FB0000] md:w-[30%] w-[80%] h-[3px]"></p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {services.map((service) => (
            <div className="flex flex-col bg-white cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 rounded-md h-[500px] w-[100%]   ">
              <img
                src={service.image}
                alt=""
                className="h-[273px] rounded-t-md w-[100%] object-cover"
              />
              <div className="flex flex-col p-4 h-[100%] justify-between">
                <p className="text-xl font-bold">{service.title}</p>
                <p className="text-start w-[90%] text-[#4B4453] mx-auto">
                  {service.content}
                </p>
                <p className="text-end font-semibold text-[#F50606] p-2">
                  Find out more
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
