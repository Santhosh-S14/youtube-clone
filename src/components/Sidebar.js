import React from "react";
import {
  Home,
  Layers2,
  MonitorPlay,
  CirclePlay,
  SquareUser,
  History,
  ListVideo,
  Clock,
  ThumbsUp,
  ArrowDownToLine,
  Settings,
  Flag,
  MessageSquareWarning,
  HelpCircle,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-48 shadow-md h-screen">
      <ul className="pb-2 px-2">
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <Home />
            <p>Home</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <Layers2 />
            <p>Shorts</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <MonitorPlay />
            <p>Subscriptions</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <CirclePlay />
            <p>YouTube Music</p>
          </div>
        </li>
      </ul>
      <ul className="border-t-2 border-t-gray-200 pt-2 pb-2 px-2">
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <SquareUser />
            <p>Your channel</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <History />
            <p>History</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <ListVideo />
            <p>Playlists</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <Clock />
            <p>Watch later</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <ThumbsUp />
            <p>Liked videos</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <ArrowDownToLine />
            <p>Downloads</p>
          </div>
        </li>
      </ul>
      <ul className="border-t-2 border-t-gray-200 pt-2 pb-2 px-2">
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <Settings />
            <p>Settings</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <Flag />
            <p>Report history</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <HelpCircle />
            <p>Help</p>
          </div>
        </li>
        <li className="cursor-pointer rounded-xl hover:bg-gray-200">
          <div className="flex space-x-4 p-2">
            <MessageSquareWarning />
            <p>Send feedback</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
