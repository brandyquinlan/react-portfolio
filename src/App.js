import React, { Component } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Knowledge from './components/Knowledge'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Projects />
                <Knowledge />
                <Contact />
                <Footer />
            </div>
        
        )
    }
}


