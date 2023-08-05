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
      <div class="bg-red-500  absolute left-1/2 transform h-[253px]  -translate-x-1/2 -translate-y-1/2  w-[80%]"></div>

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
