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
          title='HTML/CSS'
          description='Styled using vanilla CSS while using HTML '
        />
        <TimelineInfo title='SQLite' description='Using ActiveRecord to create the models for users, messages, and follows' />
        <TimelineInfo title='ActiveStorage' description='Using ActiveStorage to upload and store user profile image' />
        <TimelineInfo title='BCrypt' description='Used for login authentication' />
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default TimelineCritter;
