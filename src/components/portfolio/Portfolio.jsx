import React from 'react'
import "./Portfolio.scss"
import TestPic from "../../assets/portfolio/tech-blog.png"

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {/* <li className='active'>Featured</li>
                <li>Featured</li>
                <li>Featured</li>
                <li>Featured</li>
                <li>Featured</li> */}
            </ul>
            <div className="container">
                <div className="item">
                    <img src={TestPic} alt="test pic"/>
                    <h3>App Name</h3>
                </div>
                <div className="item">
                    <img src={TestPic} alt="test pic"/>
                    <h3>App Name</h3>
                </div>
                <div className="item">
                    <img src={TestPic} alt="test pic"/>
                    <h3>App Name</h3>
                </div>
                <div className="item">
                    <img src={TestPic} alt="test pic"/>
                    <h3>App Name</h3>
                </div>
                <div className="item">
                    <img src={TestPic} alt="test pic"/>
                    <h3>App Name</h3>
                </div>
                <div className="item">
                    <img src={TestPic} alt="test pic"/>
                    <h3>App Name</h3>
                </div>
            </div>
        </div>
    )
}
