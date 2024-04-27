import React from "react";
import { UserCircleIcon } from "lucide-react";

const Comment = ({ oneComment }) => {
  const { name, comment } = oneComment;
  return (
    <div className="flex py-2 items-center bg-gray-100 rounded-lg m-2">
      <div>
        <UserCircleIcon size={40} />
      </div>
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
