import React from "react";
import TimelineInfo from "../Timeline-Info/TimelineInfo";

const TimelineChello = () => {
  return (
    <div className='timeline timeline-chello'>
      <ul>
        <TimelineInfo
          title='React.js'
          description='Developed a Single Page Application with React, utilizing components, props, state and their life cycles'
        />
        <TimelineInfo
          title='Ruby on Rails'
          description='Developed a Rails API backend with endpoints for users, projects, tasks and lists'
        />
        <TimelineInfo title='CSS' description='Styled using vanilla CSS' />
        <TimelineInfo title='PostgreSQL' description="Created object relational database to store and keep track of user's projects, and tasks for your projects" />
        <TimelineInfo title='JSON Web Token' description='Utilized with local storage to store encrypted user information client-side and bcrypt server-side' />
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default TimelineChello;
