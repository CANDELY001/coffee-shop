import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-8/12">
            <div className="flex lg:flex-1 py-6">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  alt="Coffee shop Logo"
                  src="/assests/logo.png"
                  className="h-9 w-auto lg:h-15 md:h-12"
                />
              </a>
            </div>

            <div className="flex text-black text-sm">
              <a href="#" className="mr-6 hover:text-gray-600">
                Cafe Menu
              </a>
              <a href="#" className="mr-6 hover:text-gray-600">
                About Us
              </a>
              <a href="#" className="mr-6 hover:text-gray-600">
                Find Us
              </a>
              <a href="#" className="mr-6 hover:text-gray-600">
                Alowishus Catering
              </a>
            </div>
          </div>
          <div className="p-5 sm:w-4/12">
            <h3 className="font-medium text-lg text-gray-900 mb-4">
              Subscribe to our Newsletter
            </h3>
            <form className="mt-4">
              <input
                className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="username@email.com"
              />
            </form>
          </div>
        </div>
        <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright 2025. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
