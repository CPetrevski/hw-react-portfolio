import React from 'react';
// import Typical from 'react-typical';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.linkedin.com/in/chris-petrevski-44291b84' target="_blank" rel="noreferrer">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/CPetrevski' target="_blank" rel="noreferrer">
                            <i className='fa fa-github-square'></i>
                        </a>
                    </div>
                
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hello, I'm <span className='highlighted-text'>Chris</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                Full Stack Junior Developer 
                            </h1>
                            <span className='profile-role-tagline'>

                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Contact Me{""}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
