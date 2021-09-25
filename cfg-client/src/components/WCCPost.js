import React, { Component } from "react";
import Comment from "./Comment";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export default class WCCPost extends Component {
  render() {
    let comments = [
      <Comment username="user1" text="text1" />,
      <Comment username="user2" text="text2" />,
      <Comment username="user3" text="text3" />,
    ];
    return (
      <Card sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.title}
          </Typography>

          <Typography variant="body2">{this.props.text}</Typography>
        </CardContent>
        <CardActions>
          <Button href={this.props.link} target="_blank" size="small">
            Learn More
          </Button>
        </CardActions>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Comments
          </Typography>
        </CardContent>
        <Typography variant="body2" style={{ padding: "20px 20px" }}>
          {comments.map((comment, index) => (
            <span key={index}>{comment}</span>
          ))}
        </Typography>
      </Card>
    );
  }
}
