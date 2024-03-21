"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<Boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-20 backdrop-filter backdrop-blur-md mx-5 md:mx-16 lg:mx-20 md:px-10 my-2 border border-neutral-600 bg-[#141414]/20 rounded-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden md:flex">
          <span className="self-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#ffd84b] from-[20%] to-[#b67e2b] font-primary font-semibold whitespace-nowrap">
            camp.
          </span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden bg-gray-600/50 hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium font-primary flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 ${
                  pathname && pathname === "/"
                    ? "text-secondary hover:text-white"
                    : "text-gray-300 hover:text-secondary"
                } rounded-lg hover:bg-neutral-900/40 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/create"
                className={`block py-2 px-3 ${
                  pathname && pathname === "/create"
                    ? "text-secondary hover:text-white"
                    : "text-gray-300 hover:text-secondary"
                } rounded-lg hover:bg-neutral-900/40 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0`}
              >
                Create Memberships
              </Link>
            </li>
          </ul>
        </div>
        <ConnectButton showBalance={false} />
      </div>
    </nav>
  );
};

export default Navbar;
