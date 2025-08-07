import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const InstantCoffee = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-16 mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 lg:pe-40">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
              Instant Coffee At Your Home
            </h1>
            <p className="text-gray-500 text-base md:text-lg py-6 md:py-8 text-center lg:text-left">
              Bring the café experience home with our premium instant coffee
              collection and mobile app. Order your favorite coffee blends,
              schedule deliveries, and enjoy barista-quality coffee from the
              comfort of your home. Fast delivery, fresh roasted beans, and
              exclusive app-only deals make every cup special.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button className="p-6 md:p-8 px-8 md:px-10 rounded-full shadow-lg text-base md:text-lg font-normal tracking-wide hover:scale-105 transition-all cursor-pointer">
                DOWNLOAD OUR APP
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end overflow-visible">
            <div className="relative flex items-center justify-center w-full h-[500px] md:h-[600px] px-8 mb-20 py-8 md:px-12">
              {/* Background rotated image */}
              <img
                src="/assests/coffee-banner.png"
                alt="Coffee Banner Background"
                className="absolute shadow-2xl rounded-2xl transform -rotate-12 object-cover z-10 w-[250px] h-[520px] md:w-[270px] md:h-[550px] lg:w-[270px] lg:h-[600px] -translate-x-4 md:-translate-x-2"
              />

              {/* Foreground main image */}
              <img
                src="/assests/coffee-banner.png"
                alt="Coffee Banner"
                className="absolute shadow-2xl rounded-2xl object-cover z-20 w-[250px] h-[550px] md:w-[270px] md:h-[580px] lg:w-[270px] lg:h-[600px] translate-x-6 md:translate-x-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantCoffee;
