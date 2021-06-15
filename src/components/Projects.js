import React, { Component } from 'react'
import devlr from '../assets/img/devlr.png'
import PAIR from '../assets/img/PAIR.png'
import burger from '../assets/img/eat-da-burger.jpg'
import dayPlanner from '../assets/img/day_planner.png'
import noteTaker from '../assets/img/note-taker.png'
import weather from '../assets/img/weather.png'
import employeeTracker from '../assets/img/employee-tracker.png'
import teamProfile from '../assets/img/team-profile.png'
import codebaseWalkthrough from '../assets/img/sequelize-walkthrough.png'


export default class Projects extends Component {
    render() {
        return (
            <section className="projects" id="project">
                <h1>Projects</h1>
                <div className="box-grid">

                    {/* devlr */}
                    <div className="box-flex-1">
                        <h2 className="box-caption">devlr</h2>
                        <p>Developers! {'\u00A0'} | {'\u00A0'} Show your skills, Share your life
                        <br></br>
                            <a href="https://github.com/liztownd/devlr" rel="noreferrer" target="_blank">GitHub | https://github.com/liztownd/devlr</a>
                            <br></br>
                            <a href="https://devlr.herokuapp.com" rel="noreferrer" target="_blank">Deployed | https://devlr.herokuapp.com</a>
                        </p>

                        <a href="https://devlr.herokuapp.com/" rel="noreferrer" target="_blank">
                            <img src={devlr} alt="devlr App" />
                        </a>
                    </div>

                    {/* PAIR */}
                    <div className="box-flex-2">
                        <h2 className="box-caption">PAIR</h2>
                        <p>Find a food {'\u00A0'} | {'\u00A0'} Find a cocktail {'\u00A0'} | {'\u00A0'} Pair them
                        <br></br>
                            <a href="https://github.com/brandyquinlan/PAIR" rel="noreferrer" target="_blank">GitHub | https://github.com/brandyquinlan/PAIR</a>
                            <br></br>
                            <a href="https://brandyquinlan.github.io/PAIR/" rel="noreferrer" target="_blank">Deployed | https://brandyquinlan.github.io/PAIR/</a>
                        </p>
                        <a href="https://brandyquinlan.github.io/PAIR/" rel="noreferrer" target="_blank" >
                            <img src={PAIR} alt="PAIR Recipe Site" />
                        </a>
                    </div>

                    {/* Eat-da-Burger */}
                    <div className="box-flex-3">
                        <h2 className="box-caption">Burger</h2>
                        <p>Order {'\u00A0'} | {'\u00A0'} Choose {'\u00A0'} | {'\u00A0'} Eat da burger!
                        <br></br>
                            <a href="https://github.com/brandyquinlan/Burger" rel="noreferrer" target="_blank">GitHub | https://github.com/brandyquinlan/Burger</a>
                            <br></br>
                            <a href="https://quinlan-burger.herokuapp.com/" rel="noreferrer" target="_blank">Deployed | https://quinlan-burger.herokuapp.com</a>
                        </p>
                        <a href="https://quinlan-burger.herokuapp.com/" rel="noreferrer" target="_blank">
                            <img src={burger} alt="Eat-Da-Burger App" />
                        </a>
                    </div>

                    {/* Day Planner */}
                    <div className="box-flex-4">
                        <h2 className="box-caption">Day Planner</h2>
                        <p>Plan {'\u00A0'} | {'\u00A0'} Your {'\u00A0'} | {'\u00A0'} Day
                        <br></br>
                            <a href="https://github.com/brandyquinlan/Day-Planner" rel="noreferrer" target="_blank">GitHub | https://github.com/brandyquinlan/Day-Planner</a>
                            <br></br>
                            <a href="https://brandyquinlan.github.io/Day-Planner/" rel="noreferrer" target="_blank">Deployed | https://brandyquinlan.github.io/Day-Planner</a>
                        </p>
                        <a href="https://brandyquinlan.github.io/Day-Planner" rel="noreferrer" target="_blank">
                            <img src={dayPlanner} alt="Day Planner App" />
                        </a>
                    </div>

                    {/* Note Taker */}
                    <div className="box-flex-5">
                        <h2 className="box-caption">Note Taker</h2>
                        <p>Notes {'\u00A0'} | {'\u00A0'} Write {'\u00A0'} | {'\u00A0'} Save {'\u00A0'} | {'\u00A0'} List {'\u00A0'} | {'\u00A0'} Delete
                        <br></br>
                            <a href="https://github.com/brandyquinlan/Note-Taker" rel="noreferrer" target="_blank">GitHub | https://github.com/brandyquinlan/Note-Taker</a>
                            <br></br>
                            <a href="https://quinlan-note-taker.herokuapp.com" rel="noreferrer" target="_blank">Deployed | https://quinlan-note-taker.herokuapp.com</a>
                        </p>
                        <a href="https://quinlan-note-taker.herokuapp.com" rel="noreferrer" target="_blank">
                            <img src={noteTaker} alt="Note Taker App" />
                        </a>
                    </div>

                    {/* Weather */}
                    <div className="box-flex-6">
                        <h2 className="box-caption">Weather App</h2>
                        <p>Weather by City {'\u00A0'} | {'\u00A0'} 5-Day Forecasts
                        <br></br>
                            <a href="https://github.com/brandyquinlan/Weather-App" rel="noreferrer" target="_blank">GitHub | https://github.com/brandyquinlan/Weather-App</a>
                            <br></br>
                            <a href="https://brandyquinlan.github.io/Weather-App" rel="noreferrer" target="_blank">Deployed | https://brandyquinlan.github.io/Weather-App</a>
                        </p>
                        <a href="https://brandyquinlan.github.io/Weather-App" rel="noreferrer" target="_blank">
                            <img src={weather} alt="Weather App" />
                        </a>
                    </div>

                    {/* Employee Tracker */}
                    <div className="box-flex-7">
                        <h2 className="box-caption">Employee Tracker</h2>
                        <p>Company CMS for Employees {'\u00A0'} | {'\u00A0'} Node.js
                        <br></br>
                            <a href="https://github.com/brandyquinlan/Employee-Tracker" rel="noreferrer" target="_blank">https://github.com/brandyquinlan/Employee-Tracker</a>
                            <br></br>
                            <a href="https://drive.google.com/file/d/13R-5D1GZMi7H4Mf2s9DusZm1GOJXBscJ/view?usp=sharing" rel="noreferrer" target="_blank">Node.js CLI App | Link to Demo</a>
                        </p>
                        <a href="https://drive.google.com/file/d/13R-5D1GZMi7H4Mf2s9DusZm1GOJXBscJ/view?usp=sharing" rel="noreferrer" target="_blank">
                            <img src={employeeTracker} alt="Employee Tracker" />
                        </a>
                    </div>

                    {/* Team Profile */}
                    <div className="box-flex-8">
                        <h2 className="box-caption">Team Profile Generator</h2>
                        <p>Build Your Team {'\u00A0'} | {'\u00A0'} Print an Org Chart
                        <br></br>
                            <a href="https://github.com/brandyquinlan/Team-Profile-Generator" rel="noreferrer" target="_blank">https://github.com/brandyquinlan/Team-Profile-Generator</a>
                            <br></br>
                            <a href="https://drive.google.com/file/d/1gAw_Z9mYlSkxO-PZpA-X3sgWMqO1pMaK/view?usp=sharing" rel="noreferrer" target="_blank">Node.js CLI App | Link to Demo</a>
                        </p>
                        <a href="https://drive.google.com/file/d/1gAw_Z9mYlSkxO-PZpA-X3sgWMqO1pMaK/view?usp=sharing" rel="noreferrer" target="_blank">
                            <img src={teamProfile} alt="Team Profile Generator App" />
                        </a>
                    </div>

                    {/* Sequelize Codebase Walktrough */}
                    <div className="box-flex-9">
                        <h2 className="box-caption">Codebase Reverse Engineer Manual</h2>
                        <p>Don't Know What to Do? {'\u00A0'} | {'\u00A0'} Check Out this Guide
                        <br></br>
                            <a href="https://drive.google.com/file/d/1dmTJwQ8RU-dWTD4exJQ0sr7e2UTTcear/view?usp=sharing" rel="noreferrer" target="_blank">No GitHub Repo | No Coding Done | Guide Developed</a>
                            <br></br>
                            <a href="https://drive.google.com/file/d/1dmTJwQ8RU-dWTD4exJQ0sr7e2UTTcear/view?usp=sharing" rel="noreferrer" target="_blank">Link to Codebase Walk-through PDF</a>
                        </p>
                        <a href="https://drive.google.com/file/d/1dmTJwQ8RU-dWTD4exJQ0sr7e2UTTcear/view?usp=sharing" rel="noreferrer" target="_blank">
                            <img src={codebaseWalkthrough} alt="Codebase Walk-through" />
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}


