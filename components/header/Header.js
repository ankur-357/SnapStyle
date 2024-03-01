import React, { useEffect, useState } from "react";
import Image from 'next/image';
import {
  MoonIcon,
  SunIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMoreLinks, setShowMoreLinks] = useState(false);

  //   User preference is stored in local storage and checked when the component is loaded
  useEffect(() => {
    if (localStorage.getItem("betterscreensort_darklover") === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function changeTheme() {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("betterscreensort_darklover", false);
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("betterscreensort_darklover", true);
    }
  }

  function toggleMoreLinks() {
    setShowMoreLinks(!showMoreLinks);
  }

  return (
    <div className="w-full flex items-center relative justify-between p-6 text-red-900 dark:text-green-300">
      <span className="flex items-center">
        <p className="text-2xl sm:text-4xl font-medium text-red-800 rounded-sm px-1">
          <Image src="/logo.png" alt="" width={180} height={44} className="sm:w-8 sm:h-8 mr-2" />
        </p>
      </span>

      <div className="absolute right-0 flex flex-col">
        <div className=" flex flex-row pt-[0]">
          <button
            className="active:scale-75 transition-transform ml-2 ease-in-out outline-none sm:mr-4"
            onClick={changeTheme}
          >
            {isDarkMode ? (
              <SunIcon className="w-7 stroke-[2] mr-0.5" />
            ) : (
              <MoonIcon className="w-7 stroke-[2] fill-green-300" />
            )}
          </button>
          <button
            className="flex justify-center items-center p-3 px-6 bg-green-300 lg:mr-6 text-yellow-900 font-bold rounded-sm shadow-lg hover:shadow-yellow-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 mr-6 md:mr-0 sm:scale-100 outline-none ring ring-yellow-900 dark:ring-0"
            onClick={toggleMoreLinks}
          >
            More
          </button>
        </div>

        {showMoreLinks && (
          <div className="flex flex-col space-y-2 pt-[250px]">
            <a
              href="/FakeTweet.html"
              className="flex justify-center items-center p-3 px-6 bg-green-300 text-yellow-900 font-bold rounded-sm shadow-lg hover:shadow-yellow-300/30 sm:hover:scale-[0.75] transition-all ease-in-out duration-100 scale-75 outline-none ring ring-yellow-900 dark:ring-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet Generator <ArrowTopRightOnSquareIcon className="w-6 ml-2 stroke-2" />
            </a>
            <a
              href="/FakeFacebook.html"
              className="flex justify-center items-center p-3 px-6 bg-green-300 text-yellow-900 font-bold rounded-sm shadow-lg hover:shadow-yellow-300/30 sm:hover:scale-[0.75] transition-all ease-in-out duration-100 scale-75 outline-none ring ring-yellow-900 dark:ring-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram Generator <ArrowTopRightOnSquareIcon className="w-6 ml-2 stroke-2" />
            </a>
            <a
              href="/ImageConverter.html"
              className="flex justify-center items-center p-3 px-6 bg-green-300 text-yellow-900 font-bold rounded-sm shadow-lg hover:shadow-yellow-300/30 sm:hover:scale-[0.75] transition-all ease-in-out duration-100 scale-75 outline-none ring ring-yellow-900 dark:ring-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Converter <ArrowTopRightOnSquareIcon className="w-6 ml-2 stroke-2" />
            </a>
            <a
              href="https://github.com/ankur-357"
              className="flex justify-center items-center p-3 px-6 bg-green-300 text-yellow-900 font-bold rounded-sm shadow-lg hover:shadow-yellow-300/30 sm:hover:scale-[0.75] transition-all ease-in-out duration-100 scale-75 outline-none ring ring-yellow-900 dark:ring-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowTopRightOnSquareIcon className="w-6 ml-2 stroke-2" />
            </a>
            <a
              onClick={toggleMoreLinks}
              className="flex justify-center items-center p-3 px-6 bg-green-300 text-yellow-900 font-bold rounded-sm shadow-lg hover:shadow-yellow-300/30 sm:hover:scale-[0.75] transition-all ease-in-out duration-100 scale-75 outline-none ring ring-yellow-900 dark:ring-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Less
            </a>
            <a
              onClick={changeTheme}
              className="flex justify-center items-center p-3 px-6 bg-green-300 text-yellow-900 font-bold rounded-sm shadow-lg hover:shadow-yellow-300/30 sm:hover:scale-[0.75] transition-all ease-in-out duration-100 scale-75 outline-none ring ring-yellow-900 dark:ring-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Toggle Theme
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
