import React, { Component } from 'react'
import hero from '../assets/img/hero-ian-schneider-TamMbr4okv4-unsplash.png'

export default class Header extends Component {
    render() {
        return (
        <header className="hero">
            <div id="navbar" className="navbar">
                <h1 className="name">Brandy Quinlan</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#knowledge">Knowledge</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="https://drive.google.com/file/d/1C1mF9FgtpsEYTxjXUS7QtxoNSW40O7dr/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></li>
                    </ul>
                </nav>
            </div>
            <section className="container">
                <img src={ hero } alt="" className="no-repeat  center center/cover">
                </img>
            </section>
        </header>
        )
    }
}


