import React, { Component } from "react";
import WCCPost from "./WCCPost";

export default class WCCFeed extends Component {
  render() {
    let posts = [
      <WCCPost title="title" text="text" />,
      <WCCPost title="title" text="text" />,
      <WCCPost title="title" text="text" />,
    ];
    return (
      <div>
        {posts.map((post, index) => (
          <span key={index}>{post}</span>
        ))}
      </div>
    );
  }
}
