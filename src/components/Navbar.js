import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from '../data'
import { IoBulbOutline } from "react-icons/io5";
import { useGlobalContext } from '../context';

export default function Navbar() {
    const [showlinks, setShowLinks] = useState(false)
    const { light, setLight } = useGlobalContext()
    const [activeButton, setActiveButton] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const head = document.getElementById('header')
        const length = head.getBoundingClientRect()
        const height = length.height
        const width = length.width
        console.log(width)
        console.log(height)
        const location = document.querySelector(target).offsetTop

        if (showlinks) {
            window.scrollTo({
                left: 0,
                top: (location - height) - 250,
            })
        }
        else window.scrollTo({
            left: 0,
            top: location - 140,
        })
    }

    return (

        <nav className={light ? 'navbar light-bg' : 'navbar dark-bg'}>
            <div className='nav-center'>
                <header className='nav-header' id="header">
                    <h2 className='logo'>Aisha</h2>
                    <button className={light ? 'btn-toggle light-color' : 'btn-toggle dark-color'} onClick={() => setShowLinks(!showlinks)}><FaBars /></button>
                    <div className='toggle'>
                        <button className={light ? 'dark' : 'light'} onClick={() => setLight(!light)}><IoBulbOutline /></button>
                    </div>

                </header>
                <div className={showlinks ? 'links-container show-links' : 'links-container'}>
                    <ul className='links'>
                        {links.map((link,index) => {
                            const { id, url, text } = link
                            console.log(typeof id)
                            return (
                                <li className='link' key={id} onClick={()=>setActiveButton(index)}>
                                    <a className={light ? `light-color link ${activeButton === index ? 'active' : 'null'}` : `dark-color link ${activeButton === index ? 'active' : null}`} href={url} alt='text' onClick={handleClick} >
                                        {text}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </nav>


    )
}
