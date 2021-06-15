import React, { Component } from 'react'
import curriculum from '../assets/img/ku-curriculum.png'

export default class Knowledge extends Component {
    render() {
        return (
            <section id="knowledge">
                <h1>Knowledge</h1>
                <div className="blocks">
                    <div className="box" id="box1">
                        <i className="fas fa-briefcase fa-2x"></i>
                        <h3>Hands On Experience</h3>
                        <p>Managed applications throughout my career</p>
                        <a href="https://drive.google.com/file/d/1C1mF9FgtpsEYTxjXUS7QtxoNSW40O7dr/view?usp=sharing" rel="noreferrer" target="_blank" className="btn" id="resume">View My Resume</a>
                    </div>
                    <div className="box" id="box2">
                        <i className="fas fa-laptop-code fa-2x"></i>
                        <h3>Full Stack Web Development</h3>
                        <p>MERN Stack (MongoDB • Express.js • React.js • Node.js) • CSS • HTML • JavaScript • jQuery • Responsive Design • Bootstrap • Handlebars • API • JSON • AJAX • Git • GitHub Pages • GitHub Projects • Heroku • JAWSDB • MySQL • MongoJS • User Authentication • PWAs • Unit Testing • Functional Testing • Linting • Continuous Integration
                </p>
                    </div>
                    <div className="box" id="box3">
                        <i className="fas fa-book fa-2x"></i>
                        <h3>Recent Learning</h3>
                        <p>Attended KU Full Stack Development Bootcamp - May 2021
                        </p>
                        <a href={curriculum} rel="noreferrer" target="_blank" className="btn">View Curriculum</a>
                    </div>
                </div>
            </section>
        )
    }
}


