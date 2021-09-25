import React from "react";
import Button from "@mui/material/Button";
const Post = ({ post, toggleImportance }) => {
  const label = post.important ? "make not important" : "make important";
  return (
    <li>
      {post.content}
      <Button onClick={toggleImportance}>{label}</Button>
    </li>
  );
};

export default Post;
