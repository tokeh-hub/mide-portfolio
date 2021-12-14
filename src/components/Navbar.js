import React from 'react'
import { useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {links} from '../data'

export default function Navbar() {
    const[showlinks,setShowLinks] = useState(false)
    
    return (
        
        <nav className=' navbar'>
            <div className='nav-center'>
                <header className='nav-header'>
                    <h2 className='logo'>Aisha</h2>
                    <button className='btn-toggle' onClick={()=>setShowLinks(!showlinks)}><FaBars/></button>  
                </header>
                <div className={showlinks?'links-container show-links':'links-container'}>
                <ul className='links'>
                     {links.map(link=>{
                         const {id,url,text} = link
                         return(
                             <li className='link' key={id}>
                                 <a href={url} alt='text' >
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
