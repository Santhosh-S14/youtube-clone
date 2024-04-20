import React from "react";
import { Bell, Menu, Mic, Video } from "lucide-react";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="grid grid-flow-col px-4 py-2 shadow-lg">
      <div className="col-span-1 flex items-center">
        <Menu size={24} className="text-gray-700 cursor-pointer" />
        <img
          className="w-30 mx-2 h-6"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="youtube logo"
        ></img>
      </div>
      <div className="col-span-6">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none"
          ></input>
          <button className="border border-gray-400 rounded-r-full px-5 py-2">
            Search
          </button>
          <button className="bg-gray-100 border border-gray-300 rounded-full px-2 py-2 ml-2">
            <Mic size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
      <div className="col-span-3 flex justify-end items-center space-x-6">
        <Video size={24} className="text-gray-700 cursor-pointer" />
        <Bell size={24} className="text-gray-700 cursor-pointer" />
        <div className="relative">
          <Avatar className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
