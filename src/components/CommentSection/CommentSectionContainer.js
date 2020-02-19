// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log(props, " is props in CommentSection")

  // Add state for the comments
  const [comment] = useState(props.comments)
  console.log(comment, " is comment from CommentSection")

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comment.map(c => (
         <Comment comment={c.text} key={c.username}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
