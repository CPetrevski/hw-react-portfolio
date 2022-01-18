import React from 'react'
import "./TopBar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function TopBar({ menuOpen,setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo'>Chris Petrevski</a>
                    {/* <div className="itemContainer">
                        <PersonIcon className='icon'/>
                        <span>1234</span>
                    </div> */}
                    <div className="itemContainer">
                        <EmailIcon className='icon'/>
                        <span>c_petrevski@hotmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
