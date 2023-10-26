"use client";
import Link from "next/link";
import React, { useState } from "react";
import Tab from "./Tab";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
function SideBar() {
  const [open, setOpen] = useState(true);
  const tabs = [
    { opens: open, rf: "/dashboard/home", name: "Dashboard" },
    { opens: open, rf: "/dashboard/projects", name: "Projects" },
    { opens: open, rf: "/dashboard/clients", name: "Clients" },
    { opens: open, rf: "/dashboard/biens", name: "Biens" },
    { opens: open, rf: "/dashboard/reservation", name: "Reservation" },
    { opens: open, rf: "/dashboard/Sittings", name: "Sittings" },
  ];
  const classm = "";
  return (
    <div className="  flex  flex-col px-5 pt-5 gap-10 shadow-xl max-h-screen overflow-y-scroll scrollbar-hide">
      <div className="flex justify-between">
        {" "}
        <div className={open ? "" : "hidden"}>LOGO</div>{" "}
        <div>
          <BsFillArrowLeftCircleFill
            size={23}
            onClick={() => {
              setOpen(!open);
              {
                console.log(open);
              }
            }}
            className={open ? " duration-500 " : "rotate-180 duration-500"}
          />
        </div>{" "}
      </div>{" "}
      {tabs.map((option) => (
        // <div className=" gap-y-25 h-16 ">
        <div className="flex flex-grow-1 flex-col gap-5">
          <Tab opens={option.opens} rf={option.rf} name={option.name} />
        </div>
      ))}
    </div>
  );
}

export default SideBar;
