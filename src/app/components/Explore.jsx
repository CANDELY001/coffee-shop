"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const Explore = () => {
  return (
    <>
      <div className="container py-10 md:py-16 lg:py-20 mx-auto px-4">
        <div className="text-center py-8 md:py-10 lg:py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Explore Our Alowishus
            </h1>
            <p className="py-2 md:py-4 text-gray-500 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
              Discover our complete range of premium coffee services, from
              artisanal coffee catering for special events to fresh gourmet food
              pairings and handcrafted gelato. Every offering is carefully
              curated to deliver an exceptional taste experience that celebrates
              quality ingredients and expert craftsmanship.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-4 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto items-center">
          <div className="shadow-lg shadow-t-lg border-1 border-gray-300/10 p-4 md:p-5 py-5 md:py-6 rounded-lg hover:shadow-xl  transition-all text-center max-w-sm mx-auto  ">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
              Our Catering
            </h1>
            <p className="py-1 md:py-2 text-gray-500 text-xs md:text-base lg:text-base">
              Professional coffee catering services for corporate events,
              weddings, and special occasions. Fresh espresso bar setup with
              skilled baristas.
            </p>
            <div className="flex justify-center">
              <Image
                src="/assests/icon1.png"
                alt="meal icon"
                height={100}
                width={100}
                className="py-2 md:py-3 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
              />
            </div>
            <Button className="p-3 md:p-4 px-4 md:px-6 rounded-full shadow-lg text-xs md:text-sm lg:text-base font-normal tracking-wide hover:scale-105 transition-all cursor-pointer w-full md:w-auto ">
              ORDER CATERING
            </Button>
          </div>
          <div className="shadow-lg shadow-t-lg border-1 border-gray-300/10 p-4 md:p-5 py-5 md:py-6 rounded-lg hover:shadow-xl  transition-all text-center max-w-sm mx-auto  ">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
              The Food
            </h1>
            <p className="py-1 md:py-2 text-gray-500 text-xs md:text-base lg:text-base">
              Fresh sandwiches, artisanal pastries, and gourmet breakfast items
              made daily. Perfect pairings for your favorite coffee drinks.
            </p>
            <div className="flex justify-center">
              <Image
                src="/assests/icon2.png"
                alt="food icon"
                height={100}
                width={100}
                className="py-2 md:py-3 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
              />
            </div>
            <Button className="p-3 md:p-4 px-4 md:px-6 rounded-full shadow-lg text-xs md:text-sm lg:text-base font-normal tracking-wide hover:scale-105 transition-all cursor-pointer w-full md:w-auto">
              FOOD MENU
            </Button>
          </div>
          <div className="shadow-lg shadow-t-lg border-1 border-gray-300/10 p-4 md:p-5 py-5 md:py-6 rounded-lg hover:shadow-xl  transition-all text-center max-w-sm mx-auto  ">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
              The Gelato
            </h1>
            <p className="py-1 md:py-2 text-gray-500 text-xs md:text-base lg:text-base">
              Authentic Italian gelato crafted with premium ingredients.
              Seasonal flavors and classic favorites, perfect complement to our
              coffee.
            </p>
            <div className="flex justify-center">
              <Image
                src="/assests/icon3.png"
                alt="icecream icon"
                height={100}
                width={100}
                className="py-2 md:py-3 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
              />
            </div>
            <Button className="p-3 md:p-4 px-4 md:px-6 rounded-full shadow-lg text-xs md:text-sm lg:text-base font-normal tracking-wide hover:scale-105 transition-all cursor-pointer w-full md:w-auto">
              DISCOVER MORE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
