import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const jobTitles = ["Software Engineer", "Pradeep Prajapati"];
  const [headerValue, setHeaderValue] = useState(jobTitles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 100) {
        // Change 100 to your desired scroll position to trigger the fixed navbar
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

// Change header text 
  useEffect(() => {
    const timeout = setTimeout(() => {
      const newIndex = (index + 1) % jobTitles.length;
      setIndex(newIndex);
      setHeaderValue(jobTitles[newIndex]);
    }, 3000); // 30 seconds in milliseconds

    return () => clearTimeout(timeout);
  }, [index, jobTitles]);

  return (
    <>
      <nav
        className={`bg-white transition shadow-lg border-gray-200 dark:bg-gray-900 ${
          isNavFixed ? "fixed top-0 left-0 w-full z-50" : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center ml-4 text-4xl font-semibold whitespace-nowrap font-bold text-blue-400 dark:text-white">
              {headerValue}
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto mr-20" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              
              <li>
                <Link
                  to="/Skill"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
