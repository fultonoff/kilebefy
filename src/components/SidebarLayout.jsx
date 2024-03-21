import React from "react";
import SideNav from "./SideNav";

const SidebarLayout = ({ children }) => {
  return (
    <div className="flex gap-4 mt-20">
       
      <SideNav />

        
        <div className="w-full">
      {children}

        </div>
    </div>
  );
};

export default SidebarLayout;
