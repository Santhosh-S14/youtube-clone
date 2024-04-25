import React, { useEffect, useState } from "react";
import { Bell, Menu, Mic, Video, Search } from "lucide-react";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const getSuggestions = async () => {
    const url = YOUTUBE_SEARCH_API + searchQuery;
    const data = await fetch(url);
    const json = await data.json();
    setSearchSuggestions(json[1]);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      getSuggestions();
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);
  const handleToggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="grid grid-flow-col px-4 py-2 shadow-md">
      <div className="col-span-1 flex items-center">
        <Menu
          size={24}
          className="text-gray-700 cursor-pointer"
          onClick={handleToggle}
        />
        <img
          className="w-30 mx-2 h-6"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="youtube logo"
        ></img>
      </div>
      <div className="col-span-8 px-40">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="border border-gray-400 rounded-r-full px-5 py-2">
            <Search size={20} />
          </button>
          <button className="bg-gray-100 border border-gray-300 rounded-full px-2 py-2 ml-2">
            <Mic size={24} className="text-gray-700" />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed flex px-4 py-2 bg-white w-[35rem] shadow-lg rounded-lg border border-gray-200">
            {
              <ul className="w-[35rem]">
                {searchSuggestions.map((suggestion) => {
                  return (
                    <li
                      className="py-2 px-3 shadow-sm hover:bg-gray-100"
                      key={suggestion}
                    >
                      <div className="flex">
                        <Search size={12} className="mt-2 mr-2" />
                        {suggestion}
                      </div>
                    </li>
                  );
                })}
              </ul>
            }
          </div>
        )}
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
