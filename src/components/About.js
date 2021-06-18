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
                    KU's Full Stack Flex Program offered the education I was looking for, providing training in the full spectrum of web development. I look forward to continuing my journey of becoming a web developer and spending the rest of my career applying and perfecting what I have learned.
                </p>
            </div>
        )
    }
}


