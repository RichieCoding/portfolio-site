import React from "react";
import TimelineInfo from "../Timeline-Info/TimelineInfo";

const TimelineCritter = () => {
  return (
    <div className='timeline timeline-okupid'>
      <ul>
        <TimelineInfo
          title='Ruby on Rails'
          description='Developed a Rails app using MVC for backend and front end'
        />
        <TimelineInfo
          title='HTML5/CSS3'
          description='Styled using vanilla CSS3 while using HTML5'
        />
        <TimelineInfo title='SQLite' description='Created object relational database to store and keep track of users, their messages, and other users that they follow' />
        <TimelineInfo title='ActiveStorage' description='Using ActiveStorage to upload and store user profile image' />
        <TimelineInfo title='BCrypt' description='Implemented for server-side login authentication' />
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default TimelineCritter;
