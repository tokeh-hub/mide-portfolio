import React from 'react'
import {FaHtml5,FaCss3,FaReact,FaGithub} from 'react-icons/fa';
import { SiJavascript,SiTypescript} from "react-icons/si";
import { useGlobalContext } from '../context';

export default function Skills() {
    const{light} = useGlobalContext()
    return (
        <div className={light?'skills light-color':'skills dark-color'} id='skills'>
            <div className='skills-title'>
             <h2 className={light?'light-color':'dark-color'}>MY  <span >SKILLS</span></h2>
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
                 <div className='icon'>
                       <a href='https://www.w3schools.com/js/' className={light?'light-color':'dark-color'}><FaGithub/></a>
                        <h3>GITHUB</h3>
                 </div>
                 <div className='icon'>
                       <a href='https://www.w3schools.com/js/' style={{color:'#007acc'}}><SiTypescript/></a>
                        <h3>TYPESCRIPT</h3>
                 </div>
             </div>
        </div>
    )
}
