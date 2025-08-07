"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 ">
      <header className="container mx-auto ">
        <nav
          aria-label="Global"
          className="mx-auto flex  items-center justify-between py-6"
        >
          {/* Logo*/}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt="Coffee shop Logo"
                src="/assests/logo.png"
                className="h-9 w-auto lg:h-15 md:h-12"
              />
            </a>
          </div>
          {/* Open menu popup product*/}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* Main menu elements*/}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-lg font-medium text-gray-900">
              Cafe Menu
            </a>
            <a href="#" className="text-lg font-medium text-gray-900">
              About Us
            </a>
            <a href="#" className="text-lg font-medium text-gray-900">
              Find Us
            </a>
            <a href="#" className="text-lg font-medium text-gray-900">
              Alowishus Catering
            </a>
          </PopoverGroup>
          {/* Panier & Button*/}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              <ShoppingBagIcon className="h-10 w-10 bg-gray-50 text-black p-2 rounded-full shadow-lg shadow-gray-300 hover:bg-gray-100  hover:scale-105 transition-all" />
            </a>
            <button className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all">
              Buy Gift Vouchers
            </button>
          </div>
        </nav>
        {/* Mobile menu components*/}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Coffee shop Logo"
                  src="/assests/logo.png"
                  className="h-8 w-auto "
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Cafe Menu
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Find Us
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Alowishus Catering
                  </a>
                </div>
                <div className="py-6">
                  <div className="flex items-center justify-between mb-4">
                    <a href="#" className="text-gray-900">
                      <ShoppingBagIcon className="h-10 w-10 bg-gray-50 text-black p-2 rounded-full shadow-lg shadow-gray-300 hover:bg-gray-100 hover:scale-105 transition-all" />
                    </a>
                    <button className="bg-black text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all text-sm">
                      Buy Gift Vouchers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};
export default Header;
