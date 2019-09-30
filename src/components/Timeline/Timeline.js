import React from 'react'
import './timeline.styles.scss'

const Timeline = () => {
  return (
    <div className='timeline'>
      <ul>
        <li>
          <div className="content">
            <h3>React.js</h3>
            <p>Developed a Single Page Application with React.js, creating a UI with React. </p>
          </div>
          <div className="time">
            <h4>React.js</h4>
          </div>
        </li>
        <li>
          <div className="content">
            <h3>Ruby on Rails</h3>
            <p>Developed an API using Ruby on Rails. Using restful routes to fetch data from the front end. </p>
          </div>
          <div className="time">
            <h4>React.js</h4>
          </div>
        </li>
        <li>
          <div className="content">
            <h3>React.js</h3>
            <p>Developed a Single Page Application with React.js, creating a UI with React. </p>
          </div>
          <div className="time">
            <h4>React.js</h4>
          </div>
        </li>
        <li>
          <div className="content">
            <h3>React.js</h3>
            <p>Developed a Single Page Application with React.js, creating a UI with React. </p>
          </div>
          <div className="time">
            <h4>React.js</h4>
          </div>
        </li>
        <div style={{clear: 'both'}}></div>
      </ul>
    </div>
  )
}

export default Timeline
