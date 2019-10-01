import React from "react";
import TimelineInfo from "../Timeline-Info/TimelineInfo";

const TimelineCritter = () => {
  return (
    <div className='timeline timeline-critter'>
      <ul>
        <TimelineInfo
          title='Vanilla JavaScript'
          description='Developed a Single Page Application with vanilla JS, creating a UI with Javascript.'
        />
        <TimelineInfo
          title='Ruby on Rails'
          description='Developed an API using Ruby on Rails. Using restful routes to fetch data from the front end. '
        />
        <TimelineInfo title='CSS' description='Styled using vanilla CSS' />
        <TimelineInfo title='SQLite' description='Used object relational models for users, products, cart.' />
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default TimelineCritter;
