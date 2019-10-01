import React from "react";
import "./timeline-info.styles.scss";

const TimelineInfo = ({title, description}) => {
  return (
    <li>
      <div className='content'>
        <h3 className='single-time-title'>{title}</h3>
        <p>
          {description}
        </p>
      </div>
      {/* <div className='time'>
        <h4>{title}</h4>
      </div> */}
    </li>
  );
};

export default TimelineInfo;
