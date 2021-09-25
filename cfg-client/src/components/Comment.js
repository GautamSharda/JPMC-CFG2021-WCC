import React, { Component } from "react";
import { Grid, Avatar } from "@material-ui/core";

export default class Comment extends Component {
  render() {
    return (
      <div>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt={this.props.username} src={this.props.img} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>
              {this.props.username}
            </h4>
            <p style={{ textAlign: "left" }}>{this.props.text}</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
