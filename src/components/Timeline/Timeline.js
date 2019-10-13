import React from "react";
import "./timeline.styles.scss";
import TimelineInfo from "../Timeline-Info/TimelineInfo";


const Timeline = () => {
  return (
    <div className='timeline'>
      <ul>
        <TimelineInfo
          title='React.js'
          description='Developed a Single Page Application with React, utilizing components, props, state and their life cycles'
        />
        <TimelineInfo
          title='Ruby on Rails'
          description='Developed a Rails API backend with endpoints for users, products, cart and orders'
        />
        <TimelineInfo title='SCSS' description='Implemented the UI/UX with SCSS' />
        <TimelineInfo title='PostgreSQL' description='Created object relational database to store and keep track of customers, inventory, and orders placed' />
        <TimelineInfo title='JSON Web Token' description='Utilized with local storage to store encrypted user information client-side and bcrypt server-side' />
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default Timeline;
