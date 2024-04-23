import React from "react";

const ButtonsList = () => {
  const buttonNames = [
    "All",
    "Gaming",
    "Live",
    "Valorant",
    "Music",
    "Formula 1",
    "APIs",
    "Recently uploaded",
    "Watched",
    "New to you",
  ];
  return (
    <div className="px-4">
      {buttonNames.map((name) => (
        <button
          key={name}
          className="px-4 py-1 m-2 font-semibold bg-gray-200 rounded-lg text-sm"
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonsList;
