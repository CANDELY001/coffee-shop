"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

const TestimonialCard = ({ imageSrc, name, rating, review }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 m-2 md:m-7 flex flex-col min-h-[350px] md:min-h-[400px] w-full max-w-[280px] sm:max-w-none mx-auto relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10"></div>

      <div className="bg-gray-200 flex-shrink-0">
        <img
          src={imageSrc}
          alt={name}
          className="rounded-t-md object-cover w-full h-[200px]"
        />
      </div>
      <div className="p-4 md:p-7 flex-1 flex flex-col">
        <div className="flex flex-col sm:grid sm:grid-cols-2 items-start sm:items-center mb-4 gap-2 sm:gap-0">
          <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
            {name}
          </h1>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                width={15}
                className="text-yellow-400"
                fill="currentColor"
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <p
            className={`text-gray-500 text-sm md:text-lg ${
              !isExpanded ? "line-clamp-3 overflow-hidden" : "mb-4"
            }`}
            style={{
              display: !isExpanded ? "-webkit-box" : "block",
              WebkitLineClamp: !isExpanded ? 3 : "none",
              WebkitBoxOrient: "vertical",
              overflow: !isExpanded ? "hidden" : "visible",
            }}
          >
            {review}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-600 text-xs md:text-sm mt-auto self-start font-medium transition-colors"
          >
            {isExpanded ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      name: "Sarah Johnson",
      rating: 5,
      review:
        "Absolutely the best coffee shop in the city! Their single-origin Ethiopian beans are incredible, and the baristas are true artists. I come here every morning before work and the consistency is amazing. The cozy atmosphere makes it perfect for both business meetings and casual catch-ups with friends. Highly recommend their signature caramel macchiato!",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90bi1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Mike Chen",
      rating: 5,
      review:
        "As a remote developer, I've tried dozens of coffee shops for working, but this place stands out. Lightning-fast WiFi, comfortable seating, and the best pour-over coffee I've ever tasted. Their Colombian roast is perfectly balanced - not too acidic, with rich chocolate notes. The staff respects the work environment while being incredibly friendly. Five stars!",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Emily Davis",
      rating: 5,
      review:
        "I'm a coffee connoisseur and this place exceeds all expectations. The attention to detail in every cup is remarkable - from the perfect temperature to the exquisite latte art. Their seasonal menu keeps things exciting, and I love how they source their beans directly from farmers. The almond croissants are also divine. This has become my second home!",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "David Wilson",
      rating: 5,
      review:
        "Outstanding coffee shop with exceptional service! The baristas remember my order (double espresso, extra shot) and always greet me with a smile. Their espresso blend has the perfect crema and bold flavor that keeps me coming back daily. The minimalist interior design creates a calming environment perfect for reading or working. Definitely the premium coffee experience I was looking for.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      name: "Lisa Brown",
      rating: 5,
      review:
        "This coffee shop is a true gem! The latte art is Instagram-worthy, but more importantly, the taste is phenomenal. I love their seasonal specials - the pumpkin spice latte in fall and cold brew variations in summer. The organic pastries pair perfectly with their coffee, and the sustainable practices make me feel good about supporting this business. Can't recommend highly enough!",
    },
  ];

  return (
    <>
      <div className="container px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-6 text-center py-8 md:py-16">
          <div className="md:col-start-2 md:col-span-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Customer Reviews & Coffee Shop Testimonials
            </h1>
            <p className="py-2 text-gray-500 text-base md:text-lg">
              Discover what our loyal customers say about our premium coffee
              experience. From artisanal espresso to handcrafted latte art, read
              authentic reviews from coffee lovers who make our café their daily
              destination.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-6 px-4 mb-8">
        <div className="hidden sm:block -space-x-2 overflow-hidden">
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt="Client 1"
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt="Client 2"
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
            alt="Client 3"
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt="Client 4"
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt="Client 5"
          />
        </div>
        <div className="border-none sm:border-l-2 border-black sm:pl-8 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <h3 className="text-xl md:text-2xl font-semibold mr-2">4.6</h3>
            <img
              className="w-4 md:w-5"
              src="https://www.svgrepo.com/show/513354/star.svg"
              alt="star rating"
            />
          </div>
          <div>
            <h3 className="text-xs md:text-sm">Rated by +10k on google.</h3>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-0 relative">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <Swiper
          modules={[FreeMode]}
          spaceBetween={15}
          freeMode={true}
          slidesPerView={1.3}
          centeredSlides={true}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          className="mySwiper pb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
