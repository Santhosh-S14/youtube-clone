import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebarMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const dispatch = useDispatch((store) => store.app.isSidebarOpen);
  useEffect(() => {
    dispatch(closeSidebarMenu());
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  return (
    <div className="px-8 py-2 ">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default Watch;
