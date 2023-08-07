import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="md:p-12 p-8 bg-black text-white flex flex-col gap-4 ">
      <div className="flex md:flex-row flex-col md:justify-between">
        <div className="flex md:w-[60%] flex-col gap-4">
          <div className="flex md:flex-row flex-col-reverse justify-center gap-4 md:items-start items-center">
            <div className="flex flex-col md:w-[50%] gap-2">
              <div className="flex flex-col w-[100%] justify-center items-center">
                <p className="text-xl md:text-2xl">Contact Info</p>
                <p className="w-[80%] bg-white h-[2px]" />
              </div>
              <div className="flex gap-2 items-center">
                <IoIosCall className="w-[24px] h-[24px]" />

                <div className="gap-2  border-b-2 border-white p-2 flex flex-col">
                  <p>Call for Appoinment</p>
                  <p>+254789045</p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <AiFillMail className="w-[24px] h-[24px]" />
                <div className="gap-2  border-b-2 border-white p-2 flex flex-col">
                  <p>Send Us an Email</p>
                  <p>color&drive@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex md:w-[50%] flex-col gap-2">
              <div className="flex flex-col w-[100%] justify-center items-center">
                <p className="text-xl md:text-2xl">Quick Links</p>
                <p className="w-[80%] bg-white h-[2px]" />
              </div>
              <div className="flex md:flex-col text-2xl md:text-base gap-2">
                <p>Home</p>

                <p>Home</p>

                <p>Home</p>

                <p>Home</p>
              </div>
            </div>
          </div>
          <div className="my-12">
            <p className="text-2xl  font-bold">Our Socials</p>
            <div className="flex gap-2 items-center">
              <BsFacebook className="w-[24px]  h-[24px] object-contain " />

              <AiOutlineTwitter className="w-[24px]  h-[24px] object-contain " />
              <IoIosCall className="w-[24px]  h-[24px] object-contain " />
              <AiOutlineInstagram className="w-[24px]  h-[24px] object-contain " />
            </div>
          </div>
        </div>
        <Map
          style={{
            margin: "auto",
            height: "400px",
            paddingBottom: "10px",
            cursor: "pointer",
            width: "100%",
          }}
          initialViewState={{
            latitude: -1.038757,
            longitude: 37.083375,
            zoom: 12,
          }}
          mapboxAccessToken={
            "pk.eyJ1IjoiYW5uZXRvdG9oIiwiYSI6ImNsYjB2cDl1dzFrOTQzcHFtOWdxcHBjbGgifQ.LADz9TYffPhRsjZ_O_hUHw"
          } // This is the token we got from Mapbox
          mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
        >
          <Marker
            latitude={-1.034864}
            longitude={37.073487}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className="bg-red-600 font-bold px-2 py-1 text-white rounded-xl">
              Color & Drive Auto Detailing
            </p>
          </Marker>
        </Map>
      </div>
      <p className="w-[100%] bg-white h-[2px]" />
      <div className="w-[100%] flex md:flex-row flex-col justify-between">
        <p>
          Copyright 2023 Connect. All rights reserved to Car & Drive Auto
          Detailing
        </p>

        <div className="flex gap-2 items-center">
          <p>Privacy Policy</p>

          <p>Terms and Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
