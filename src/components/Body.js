import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Body = () => {
  const { user, isAuthenticated, isLoading } = useKindeAuth();
  return (
    <div className="flex">
      <Sidebar />
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center h-full border border-t-gray-100 p-2 m-2 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">Try searching to get started</h1>
          <p>
            Start watching videos to help us build a feed of videos you'll love.
          </p>
        </div>
      )}
    </div>
  );
};

export default Body;
