"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Banner = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {/* SwiperSlide 1 */}
            <SwiperSlide>
              <div className="container py-8 md:py-12 lg:pt-15 lg:pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
                  <div className="relative order-2 lg:order-1 text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold py-2 md:py-0 leading-tight">
                      Alowishus Delicious Coffee
                      <div className="hidden lg:block absolute lg:top-62 mt-1 right-20 lg:right-56">
                        <Image
                          src="/assests/cafe.png"
                          alt="Coffee budge"
                          width={60}
                          height={60}
                          className="lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]"
                        />
                      </div>
                    </h1>
                    <p className="py-2 md:py-4 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
                      Discover the perfect blend of premium coffee beans and
                      expert craftsmanship. From rich espresso to creamy lattes,
                      every cup is brewed with passion and precision to deliver
                      an exceptional coffee experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 py-4 md:py-6 justify-center lg:justify-start">
                      <Button className="p-4 md:p-6 lg:p-7 rounded-full shadow-lg text-sm md:text-base lg:text-lg font-normal tracking-wide hover:scale-105 transition-all cursor-pointer">
                        Download App
                      </Button>
                      <Button
                        className="p-4 md:p-6 lg:p-7 rounded-full shadow-lg text-sm md:text-base lg:text-lg font-normal tracking-wide hover:scale-105 transition-all cursor-pointer"
                        variant="outline"
                      >
                        Shop Coffee
                      </Button>
                    </div>
                  </div>
                  <div className="relative order-1 lg:order-2 flex justify-center">
                    <Image
                      src="/assests/hero1.png"
                      alt="Coffee Cup Alowishus"
                      width={600}
                      height={600}
                      className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto"
                    />
                    <div className="absolute top-2 md:top-6 lg:-top-4 right-4 md:right-12 lg:right-20">
                      <Image
                        src="/assests/cafe.png"
                        alt="Coffee budge"
                        width={80}
                        height={80}
                        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* SwiperSlide 2 */}
            <SwiperSlide>
              <div className="container py-8 md:py-12 lg:pt-20 lg:pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
                  <div className="relative order-2 lg:order-1 text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold py-2 md:py-0 leading-tight">
                      Alowishus Delicious Coffee
                      <div className="hidden lg:block absolute lg:top-62 mt-1 right-20 lg:right-56">
                        <Image
                          src="/assests/cafe.png"
                          alt="Coffee budge"
                          width={60}
                          height={60}
                          className="lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]"
                        />
                      </div>
                    </h1>
                    <p className="py-2 md:py-4 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
                      Experience authentic coffee culture with our carefully
                      sourced single-origin beans and artisanal brewing methods.
                      Whether you prefer bold dark roasts or smooth light
                      blends, we craft each cup to perfection for the ultimate
                      coffee lover's journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 py-4 md:py-6 justify-center lg:justify-start">
                      <Button className="p-4 md:p-6 lg:p-7 rounded-full shadow-lg text-sm md:text-base lg:text-lg font-normal tracking-wide hover:scale-105 transition-all cursor-pointer">
                        Download App
                      </Button>
                      <Button
                        className="p-4 md:p-6 lg:p-7 rounded-full shadow-lg text-sm md:text-base lg:text-lg font-normal tracking-wide hover:scale-105 transition-all cursor-pointer"
                        variant="outline"
                      >
                        Shop Coffee
                      </Button>
                    </div>
                  </div>
                  <div className="relative order-1 lg:order-2 flex justify-center">
                    <Image
                      src="/assests/coffee-mid.png"
                      alt="Coffee Cup Alowishus"
                      width={600}
                      height={600}
                      className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] h-auto"
                    />
                    <div className="absolute top-2 md:top-6 lg:-top-4 right-4 md:right-12 lg:right-10">
                      <Image
                        src="/assests/cafe.png"
                        alt="Coffee budge"
                        width={80}
                        height={80}
                        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
