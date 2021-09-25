import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    return (
      <div>
        <h6>{this.props.username}</h6>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
