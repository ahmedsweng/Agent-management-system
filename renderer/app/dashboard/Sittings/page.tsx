"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { BsSunFill } from "react-icons/bs";
function page() {
  const [darkmode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);
 
  return (
    <div className="flex  px-5 pt-5 gap-20 flex-grow-1 shadow-xl max-h-screen  rounded-s-md justify-between pl-5 ">
      <label> {darkmode ? "light " : "dark"} mode</label>

      {darkmode ? (
        <BsSunFill
          onClick={() => {
            setDarkMode(!darkmode);
          }}
        />
      ) : (
        <BiSolidMoon
          onClick={() => {
            setDarkMode(!darkmode);
          }}
        />
      )}
      {}
    </div>
  );
}

export default page;
