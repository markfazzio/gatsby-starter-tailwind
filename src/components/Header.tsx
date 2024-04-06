import React, { useState } from "react";
import { Link } from "gatsby";

import HeaderSlide from "./HeaderSlide";
import SwitchTheme from "./SwitchTheme";

const Header: React.FC<{
  siteTitle: string;
  location: { pathname: string };
}> = ({ siteTitle, location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = location;

  return (
    <nav className="mx-6 sm:px-4 py-4 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap tracking-widest">
            {siteTitle}
          </span>
        </Link>
        <div className="flex items-center -mr-2 -my-2 md:hidden">
          <div className="flex mr-2 items-center">
            <SwitchTheme />
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full md:flex md:w-auto items-center"
          id="navbar-default"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium mr-4">
            <li>
              <Link
                to={"/"}
                className={`link py-4 ${pathname === "/" && `link-active`}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={`link py-4 ${
                  pathname === "/about" && `link-active`
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/chu1228" className="link py-4">
                Facebook
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <SwitchTheme />
          </div>
        </div>
      </div>
      <HeaderSlide
        pathname={pathname}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
};

export default Header;
