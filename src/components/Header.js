import React from "react";
import { Menu } from "lucide-react";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-1">
      <div className="col-span-1 flex">
        <Menu size={30} className="h-8" />
        <img
          className="w-30 mx-2 h-8"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="youtube logo"
        ></img>
      </div>
      <div className="col-span-10 text-center px-10">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
        ></input>
        <button className="border border-gray-400 rounded-r-full px-5 py-2">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <Avatar className="">S</Avatar>
      </div>
    </div>
  );
};

export default Header;
