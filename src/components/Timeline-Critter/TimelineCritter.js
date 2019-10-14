import React from "react";
import TimelineInfo from "../Timeline-Info/TimelineInfo";

const TimelineCritter = () => {
  return (
    <div className='timeline timeline-critter'>
      <ul>
        <TimelineInfo
          title='Vanilla JavaScript'
          description='Developed a Single Page Application with vanilla JavaScript'
        />
        <TimelineInfo
          title='Ruby on Rails'
          description='Developed a Rails API backend with endpoints for users, tweets and replies'
        />
        <TimelineInfo title='CSS3' description='Styled using vanilla CSS3' />
        <TimelineInfo title='SQLite' description='Created object relational database to store and keep track of users, their thoughts, and replies' />
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default TimelineCritter;
