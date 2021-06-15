import React, { Component } from 'react'
import me from '../assets/img/Me_copy.png'

export default class About extends Component {
    render() {
        return (
            <div id="about">
                <h1>About Me</h1>
                    <div id="aboutRow1">
                         <img src={ me } alt="Brandy Quinlan"></img>
                    </div>
                <p>
                    <span className="passion">PASSION </span> is what drives me.
                    <br></br>
                    <br></br> 
                    Passion for learning; passion for problem-solving; passion for detail; passion for taking on challenges; passion for efficiency; passion for mastery; passion for seeing my code run and do its magic. These are all ideals that have brought
                    me to this point in my life.
                </p>
                <p>
                    I have spent my career thus far in technology roles. I gravitate towards any system or application that will help streamline processes and create a positive user experience. The last project I worked on was with a small diversified team tasked with developing
                    and deploying a new web-based application. I became the user champion and developed UX solutions within the core software that provided the best experience for the end user.
                </p>
                <p>
                    I am eager to learn more about back-end and front-end coding and web development. The KU Full Stack Flex Program offers the education I am looking for. The next step in my journey will be deciding from what I learn, which area I will want to spend the
                    rest of my career perfecting.
                </p>
            </div>
        )
    }
}


