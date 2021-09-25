import React from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Paper } from "@material-ui/core";
const Post = ({ post, toggleImportance }) => {
  const label = post.important ? "make not important" : "make important";
  return (
    <Paper style={{ padding: "40px 20px" }}>
      <Card sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardContent>
          <li>
            {post.content}
            <Button onClick={toggleImportance}>{label}</Button>
            </li>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Post;
