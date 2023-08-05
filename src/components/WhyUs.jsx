import React from "react";
import whyusbg from "/whyusbg.png";
import whyuspic from "/whyuspic.png";
const WhyUs = () => {
  return (
    <div className="p-12 flex justify-center gap-16 items-start">
      <div
        style={{ backgroundImage: `url(${whyusbg})` }}
        className="bg-cover bg-center h-[468px] w-[346px] flex justify-end items-end"
      >
        <img
          src={whyuspic}
          alt=""
          className="h-[322px] -m-8 w-[274px] object-cover"
        />
      </div>

      <div className="flex items-start gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <img
              src="/experience.png"
              className="object-contain w-[50px] h-[50px]"
            />
            <div className="flex gap-2 w-[250px] flex-col">
              <p className="text-xl font-bold">Expertise and Experience:</p>
              <p className="text-[#4B4453]">
                Our team of skilled professionals has extensive experience in
                the auto detailing industry, ensuring that your car is in
                capable hands.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <img
              src="/value.png"
              className="object-contain w-[50px] h-[50px]"
            />
            <div className="flex gap-2 w-[250px] flex-col">
              <p className="text-xl font-bold">Value for Money:</p>
              <p className="text-[#4B4453]">
                Our competitive pricing ensures that you receive excellent value
                for the quality of service we provide.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <img
              src="/customerservice.png"
              className="object-contain w-[50px] h-[50px]"
            />
            <div className="flex gap-2 w-[250px] flex-col">
              <p className="text-xl font-bold">Customer Support:</p>
              <p className="text-[#4B4453]">
                Our friendly and knowledgeable customer support team is
                available to address any queries or concerns you may have.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <img
              src="/experience.png"
              className="object-contain w-[50px] h-[50px]"
            />
            <div className="flex gap-2 w-[250px] flex-col">
              <p className="text-xl font-bold">Customer Satisfaction:</p>
              <p className="text-[#4B4453]">
                Our team of skilled professionals has extensive experience in
                the auto detailing industry, ensuring that your car is in
                capable hands.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <img
              src="/transparentpricing.png"
              className="object-contain w-[50px] h-[50px]"
            />
            <div className="flex gap-2 w-[250px] flex-col">
              <p className="text-xl font-bold">Transparent Pricing:</p>
              <p className="text-[#4B4453]">
                Our team of skilled professionals has extensive experience in
                the auto detailing industry, ensuring that your car is in
                capable hands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;