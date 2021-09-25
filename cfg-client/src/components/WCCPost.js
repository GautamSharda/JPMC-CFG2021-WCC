import React, { Component } from "react";
import Comment from "./Comment";

export default class WCCPost extends Component {
  render() {
    let comments = [
      <Comment username="user" text="text" />,
      <Comment username="user" text="text" />,
      <Comment username="user" text="text" />,
    ];
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img alt="image"></img>
        <p>{this.props.text}</p>
        {comments.map((comment, index) => (
          <span key={index}>{comment}</span>
        ))}
      </div>
    );
  }
}
