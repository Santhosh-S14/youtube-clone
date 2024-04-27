import React from "react";
import { comments } from "../utils/comments-data";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
