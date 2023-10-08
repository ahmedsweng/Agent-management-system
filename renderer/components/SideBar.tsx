import Link from "next/link";
import React from "react";
import Tab from "./Tab";

function SideBar() {
  return (
    <div className="flex flex-col px-5 pt-5 gap-10 shadow-xl max-h-screen overflow-y-scroll scrollbar-hide">
      <div>LOGO</div>
      <div className="flex flex-col gap-9">
        <Tab rf={"/dashboard/home"} name={"Dashboard"} />
        <Tab rf={"/dashboard/projets"} name={"Projets"} />
        <Tab rf={"/dashboard/clients"} name={"Clients"} />
        <Tab rf={"/dashboard/biens"} name={"Biens"} />
        <Tab rf={"/dashboard/reservation"} name={"Reservation"} />
        <Tab rf={"/dashboard/paramettre"} name={"Paramettre"} />
      </div>
    </div>
  );
}

export default SideBar;
