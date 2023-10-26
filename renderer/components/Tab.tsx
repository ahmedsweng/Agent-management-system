"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { RiSettingsLine } from "react-icons/ri";
import { GoChecklist, GoHome, GoProjectRoadmap } from "react-icons/go";
import { BiBookOpen, BiGroup } from "react-icons/bi";
import { GrContactInfo } from "react-icons/gr";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { useState, createContext } from "react";

const Tab = ({
  opens,
  rf,
  name,
}: {
  opens: boolean;
  rf: string;
  name: string;
}) => {
  const pagePath = usePathname();
  const size = opens ? 25 : 30;

  return (
    <Link href={rf} className="flex hover:text-blue-600 text-gray-500">
      <div
        className={`flex ${
          opens ? "w-45  px-8 py-2" : "w-10 px-1  "
        }  duration-500 rounded-md hover:text-blue-600 hover:bg-blue-100 
      ${pagePath.includes(rf) ? "text-blue-600 bg-blue-100" : "text-gray-500"}`}
      >
        {rf === "/dashboard/home" && (
          <GoHome
            size={size}
            className={pagePath == "/dashboard/home" && " text-blue-500"}
          />
        )}
        {rf === "/dashboard/projects" && (
          <GoProjectRoadmap
            size={size}
            className={pagePath == "/dashboard/projects" && " text-blue-500"}
          />
        )}
        {rf === "/dashboard/clients" && (
          <BsPerson
            size={size}
            className={pagePath == "/dashboard/clients" && " text-blue-500"}
          />
        )}
        {rf === "/dashboard/biens" && (
          <HiOutlineHomeModern
            size={size}
            className={pagePath == "/dashboard/biens" && " text-blue-500"}
          />
        )}
        {rf === "/dashboard/reservation" && (
          <GoChecklist
            size={size}
            className={pagePath == "/dashboard/reservation" && " text-blue-500"}
          />
        )}
        {rf === "/dashboard/Sittings" && (
          <RiSettingsLine
            size={size}
            className={pagePath == "/dashboard/Sittings" && " text-blue-500"}
          />
        )}
        <div className="pl-2">{opens && name }</div>
      </div>
    </Link>
  );
};
export default Tab;
