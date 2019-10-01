import React from "react";
import "./timeline.styles.scss";
import TimelineInfo from "../Timeline-Info/TimelineInfo";

const Timeline = () => {
  return (
    <div className='timeline'>
      <ul>
        <TimelineInfo
          title='React.js'
          description='Developed a Single Page Application with React.js, creating a UI with React.'
        />
        <TimelineInfo
          title='Ruby on Rails'
          description='Developed an API using Ruby on Rails. Using restful routes to fetch data from the front end. '
        />
        <TimelineInfo title='SCSS' description='Styled using CSS preprocessor' />
        <TimelineInfo title='PostgreSQL' description='Used object relational models for users, products, cart.' />
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default Timeline;
