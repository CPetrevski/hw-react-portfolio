import React from 'react'
import "./Menu.scss"
import Resume from '../../assets/cp-resume.pdf';


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={Resume}>Resume</a>
                </li>
            </ul>
        </div>
    )
}
