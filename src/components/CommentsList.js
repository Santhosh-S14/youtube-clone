import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment oneComment={comment} />
      <div className="pl-5 border border-l-black ml-5" key={index}>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
