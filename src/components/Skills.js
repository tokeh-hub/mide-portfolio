import React from 'react'
import {FaHtml5,FaCss3,FaReact} from 'react-icons/fa';
import { SiJavascript} from "react-icons/si";

export default function Skills() {
    return (
        <div className='skills' id='skills'>
            <div className='skills-title'>
             <h2  style={{color:'white'}}>MY  <span style={{color:'#ff4a57',marginLeft:'7px'}}>SKILLS</span></h2>
             <div className='underline'></div>
             </div>
             <div className='icons'>
                 <div className='icon'>
                       <a href='https://www.w3schools.com/html/' style={{color:'#e34c26'}}><FaHtml5/></a>
                        <h3>HTML5</h3>
                 </div>
                 <div className='icon'>
                       <a href='https://www.w3schools.com/css/' style={{color:'#2965f1'}}><FaCss3/></a>
                        <h3>CSS</h3>
                 </div>
                 <div className='icon'>
                       <a href='https://reactjs.org/' style={{color:'#61dbfb'}}><FaReact/></a>
                        <h3>REACT</h3>
                 </div>
                 <div className='icon'>
                       <a href='https://www.w3schools.com/js/' style={{color:'#f0db4f'}}><SiJavascript/></a>
                        <h3>JAVASCRIPT</h3>
                 </div>
             </div>
        </div>
    )
}
