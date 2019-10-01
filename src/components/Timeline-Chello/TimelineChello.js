import React from "react";
import TimelineInfo from "../Timeline-Info/TimelineInfo";

const TimelineChello = () => {
  return (
    <div className='timeline timeline-chello'>
      <ul>
        <TimelineInfo
          title='React.js'
          description='Developed a Single Page Application with React.js, creating a UI with React.'
        />
        <TimelineInfo
          title='Ruby on Rails'
          description='Developed an API using Ruby on Rails. Using restful routes to fetch data from the front end. '
        />
        <TimelineInfo title='CSS' description='Styled using vanilla CSS' />
        <TimelineInfo title='PostgreSQL' description='Used object relational models for users, products, cart.' />
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default TimelineChello;
