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
                        <h3>Web Development</h3>
                        <p>HTML • CSS • JavaScript • jQuery • Responsive • Bootstrap • Handlebars • APIs • Git • Heroku • Node.js • npm • MySQL • MongoDB • React.js
                </p>
                    </div>
                    <div className="box" id="box3">
                        <i className="fas fa-book fa-2x"></i>
                        <h3>Learning</h3>
                        <p>Currently attending KU Full Stack Dev Bootcamp</p>
                        <a href={curriculum} rel="noreferrer" target="_blank" className="btn">View Curriculum</a>
                    </div>
                </div>
            </section>
        )
    }
}


