import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const CoffeeCatalogue = () => {
  return (
    <>
      <div className="py-8 md:py-32 ">
        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 ">
            <div className="shadow-lg  mb-10 py-4 md:py-6 px-4 md:px-8 rounded-lg hover:shadow-xl hover:scale-105 transition-all relative min-h-[200px] md:min-h-[260px] overflow-visible max-w-xs mx-auto md:max-w-[330px]  md:mb-0 group">
              <div className="grid grid-cols-1 gap-3 items-start">
                <div className="relative -mt-8 md:-mt-12">
                  <Image
                    src="/assests/mid1.png"
                    alt="Coffee"
                    height={200}
                    width={200}
                    className="mx-auto mb-3 w-[190px] h-[190px] lg:w-[200px] lg:h-[200px] object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-500 text-xs md:text-sm">#1 Selling</p>
                  <h1 className="text-lg md:text-xl lg:text-2xl py-1 font-semibold text-black">
                    Premium Espresso Blend
                  </h1>
                </div>
              </div>
              <p className="py-2 text-gray-500 text-xs md:text-sm text-center md:text-left">
                Rich, full-bodied espresso made from carefully selected
                single-origin beans. Perfect crema, intense flavor, and smooth
                finish that coffee enthusiasts love.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center py-2 mt-auto">
                <h1 className="font-semibold text-lg md:text-xl text-center md:text-left">
                  $ 4.99
                </h1>
                <button className="bg-black text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-105 transition-all text-xs md:text-sm hover:cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
            <div className="shadow-lg mb-10 py-4 md:py-6 px-4 md:px-8 rounded-lg hover:shadow-xl hover:scale-105 transition-all relative min-h-[200px] md:min-h-[280px] overflow-visible max-w-xs mx-auto  md:max-w-[330px]  md:mb-0 group">
              <div className="grid grid-cols-1 gap-3 items-start">
                <div className="relative -mt-8 md:-mt-12">
                  <Image
                    src="/assests/mid2.png"
                    alt="Coffee"
                    height={200}
                    width={200}
                    className="mx-auto mb-3  w-[190px] h-[190px] lg:w-[200px] lg:h-[200px] object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-500 text-xs md:text-sm">
                    Barista Choice
                  </p>
                  <h1 className="text-lg md:text-xl lg:text-2xl py-1 font-semibold text-black">
                    Caramel Macchiato
                  </h1>
                </div>
              </div>
              <p className="py-2 text-gray-500 text-xs md:text-sm text-center md:text-left">
                Creamy steamed milk layered with rich espresso and finished with
                vanilla-caramel drizzle. A sweet, indulgent treat perfect for
                any time of day.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center py-2 mt-auto">
                <h1 className="font-semibold text-lg md:text-xl text-center md:text-left">
                  $ 5.99
                </h1>
                <button className="bg-black text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-105 transition-all text-xs md:text-sm hover:cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
            <div className="shadow-lg py-4 md:py-6 px-4 md:px-8 rounded-lg hover:shadow-xl hover:scale-105 transition-all relative min-h-[220px] md:min-h-[200px] overflow-visible max-w-xs mx-auto  md:max-w-[330px] mb-4 md:mb-0 group">
              <div className="grid grid-cols-1 gap-3 items-start">
                <div className="relative -mt-8 md:-mt-12">
                  <Image
                    src="/assests/mid3.png"
                    alt="Coffee"
                    height={200}
                    width={200}
                    className="mx-auto mb-3 w-[190px] h-[190px] lg:w-[200px] lg:h-[200px] object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-500 text-xs md:text-sm">
                    Cold Brew Special
                  </p>
                  <h1 className="text-lg md:text-xl lg:text-2xl py-1 font-semibold text-black">
                    Iced Coffee Delight
                  </h1>
                </div>
              </div>
              <p className="py-2 text-gray-500 text-xs md:text-sm text-center md:text-left">
                Smooth cold-brewed coffee served over ice with your choice of
                milk. Refreshing, less acidic, and naturally sweet with a bold
                coffee flavor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center py-2 mt-auto">
                <h1 className="font-semibold text-lg md:text-xl text-center md:text-left">
                  $ 4.49
                </h1>
                <button className="bg-black text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-105 transition-all text-xs md:text-sm hover:cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCatalogue;
