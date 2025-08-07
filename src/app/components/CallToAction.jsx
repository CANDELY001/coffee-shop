import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return (
    <>
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16 mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <Image
                src="/assests/coffee-mid.png"
                alt="Call to Action"
                height={600}
                width={600}
                className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 lg:pe-20 xl:pe-40 text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Order Your Favourite Coffee
              </h1>
              <p className="text-gray-500 text-sm md:text-base lg:text-lg py-4 md:py-6 lg:py-8 max-w-2xl mx-auto lg:mx-0">
                Experience the perfect cup with our expertly crafted coffee
                blends, made from premium single-origin beans. Whether you crave
                a rich espresso, creamy latte, or refreshing cold brew, our
                skilled baristas ensure every order meets the highest quality
                standards. Skip the wait and enjoy convenient online ordering
                with quick pickup or delivery to your doorstep.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button className="p-4 md:p-6 lg:p-8 px-6 md:px-8 lg:px-11 rounded-full shadow-lg text-sm md:text-base lg:text-lg font-normal tracking-wide hover:scale-105 transition-all cursor-pointer">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
