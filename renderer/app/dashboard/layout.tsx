import React from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { GlobalCommand } from "../../components/GlobalCommand";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-screen h-screen flex">
      <GlobalCommand />
      <SideBar />
      <div className="px-5 py-3 flex-1">
        <TopBar />
        <div className="h-full flex-1 overflow-y-scroll scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
