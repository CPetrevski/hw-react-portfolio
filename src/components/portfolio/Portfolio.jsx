import React from 'react';
import "./Portfolio.scss";
import TechBlog from "../../assets/portfolio/tech-blog.png";
import TextEditor from "../../assets/portfolio/text-editor.png";
import UrReview from "../../assets/portfolio/urReview.png";
import FunNight from "../../assets/portfolio/fun-night.png";
import Weather from "../../assets/portfolio/weather.png";
import Note from "../../assets/portfolio/note.png";

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>

            <div className="container">
                <div className="item">
                    <a href="https://github.com/CPetrevski/19-hw-text-editor" target="_blank" rel='noreferrer'>
                        <img src={TextEditor} alt="PWA Text Editor"/>
                    </a>
                    <h3>PWA Text Editor</h3>
                </div>
                <div className="item">
                    <a href="https://github.com/CPetrevski/14-hw-tech-blog" target="_blank" rel='noreferrer'>
                        <img src={TechBlog} alt="MVC Tech Blog"/>
                    </a>
                    <h3>MVC Tech Blog</h3>
                </div>
                <div className="item">
                    <a href="https://github.com/CPetrevski/urReview" target="_blank" rel='noreferrer'>
                        <img src={UrReview} alt="Full Stack App"/>
                    </a>
                    <h3>Full Stack App</h3>
                </div>
                <div className="item">
                    <a href="https://github.com/CPetrevski/FunNightIn" target="_blank" rel='noreferrer'>
                        <img src={FunNight} alt="FunNightIn"/>
                    </a>
                    <h3>Front End App</h3>
                </div>
                <div className="item">
                    <a href="https://github.com/CPetrevski/06-hw-weather-dash" target="_blank" rel='noreferrer'>
                        <img src={Weather} alt="Weather App"/>
                    </a>
                    <h3>Weather App</h3>
                </div>
                <div className="item">
                    <a href="https://github.com/CPetrevski/11-hw-note-taker" target="_blank" rel='noreferrer'>
                        <img src={Note} alt="Note Taker"/>
                    </a>
                    <h3>Note Taker</h3>
                </div>
            </div>
        </div>
    )
}
