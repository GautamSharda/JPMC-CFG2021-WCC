import React, { Component } from "react";
import WCCPost from "./WCCPost";
import { Grid } from "@mui/material";

export default class WCCFeed extends Component {
  render() {
    let posts = [
      <WCCPost
        title="Citywide guide: Resources and Services"
        text="searching for jobs or schools, child care or health care, food or transportation, users can initiate custom searches by typing in key words. "
        link="https://resourceguide.wccny.org/"
      />,
      <WCCPost
        title="Vision"
        text="Women Creating Change envisions a more just and equitable New York City where all women are civically engaged. "
        link="https://wccny.org/about-wcc/our-new-direction/"
      />,
      <WCCPost
        title="Why YOU should be civically engaged"
        text="Onset of pandemic results in job loss for women, lack of paid leave for moms of color, low-paying healthcare jobs for women of color
              "
        link="https://wccny.org/wp-content/uploads/2021/08/WCC-Annual-Report_2020_FINAL_b.pdf"
      />,
    ];
    return (
      <div style={{ float: `right` }}>
        {posts.map((post, index) => (
          <Grid item>
            <span key={index}>{post}</span>
          </Grid>
        ))}
      </div>
    );
  }
}