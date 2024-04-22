import React from "react";
import {
  HomeNavItems,
  YouNavItems,
  ExtraYouTubeSettingsNavitems,
  CollapsedSideNavItems,
} from "./side-nav-items";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  return isSidebarOpen ? (
    <div className="w-48 shadow-md h-screen">
      <ul className="pb-2 px-2">
        {HomeNavItems.map((home) => (
          <Link to={"/"} key={home.name}>
            <li className="cursor-pointer rounded-xl hover:bg-gray-200">
              <div className="flex space-x-4 p-2">
                {home.icon}
                <p>{home.name}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <ul className="border-t-2 border-t-gray-200 pt-2 pb-2 px-2">
        {YouNavItems.map((you) => (
          <li
            className="cursor-pointer rounded-xl hover:bg-gray-200"
            key={you.name}
          >
            <div className="flex space-x-4 p-2">
              {you.icon}
              <p>{you.name}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul className="border-t-2 border-t-gray-200 pt-2 pb-2 px-2">
        {ExtraYouTubeSettingsNavitems.map((extra) => (
          <li
            className="cursor-pointer rounded-xl hover:bg-gray-200"
            key={extra.name}
          >
            <div className="flex space-x-4 p-2">
              {extra.icon}
              <p>{extra.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="w-16 shadow-md h-screen">
      <ul className="pb-2 px-2">
        {CollapsedSideNavItems.map((collapsed) => (
          <Link to={"/"} key={collapsed.name}>
            <li className="cursor-pointer rounded-xl hover:bg-gray-200 py-4">
              <div className="flex flex-col p-2 justify-center items-center">
                {collapsed.icon}
                <p className="text-[0.65rem] py-2 truncate">{collapsed.name}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
