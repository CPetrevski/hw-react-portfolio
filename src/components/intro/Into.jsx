import React from 'react'
import "./Intro.scss"
import ProfilePic from '../../assets/profile.png'

export default function Into() {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={ProfilePic} alt="Profile" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Chris Petrevski</h1>
                    <h3>Full Stack Junior Developer</h3>
                </div>
                <a href="#portfolio">
                    See More
                </a>
            </div>            
        </div>
    )
}
