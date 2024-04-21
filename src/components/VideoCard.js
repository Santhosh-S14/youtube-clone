import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { localized, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-2 mx-2 w-80 cursor-pointer">
      <img className="rounded-lg" src={thumbnails.medium.url} alt={info.id} />
      <ul>
        <li className="font-bold truncate">{localized.title}</li>
        <li className="text-sm py-1 text-gray-700">{channelTitle}</li>
        <li className="text-sm text-gray-700">{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
