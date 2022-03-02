import React from 'react'
import {FaHtml5,FaCss3,FaReact,FaGithub,FaVuejs} from 'react-icons/fa';
import { SiJavascript,SiTypescript} from "react-icons/si";
import { useGlobalContext } from '../context';

export default function Skills() {
    const{light} = useGlobalContext()
    return (
        <div data-aos="fade-up" className={light?'skills light-color':'skills dark-color'} id='skills'>
            <div data-aos="fade-up" className='skills-title'>
             <h2 className={light?'light-color':'dark-color'}>MY  <span >SKILLS</span></h2>
             <div className='underline'></div>
             </div>
             <div className='icons'>
                 <div data-aos="fade-left" className='icon'>
                       <article style={{color:'#e34c26'}}><FaHtml5/></article>
                        <h3>HTML5</h3>
                 </div>
                 <div data-aos="fade-right" className='icon'>
                       <article style={{color:'#2965f1'}}><FaCss3/></article>
                        <h3>CSS</h3>
                 </div>
                 <div data-aos="fade-left" className='icon'>
                       <article style={{color:'#61dbfb'}}><FaReact/></article>
                        <h3>REACT</h3>
                 </div>
                 <div data-aos="fade-left" className='icon'>
                       <article  style={{color:'#41b8b3'}}><FaVuejs/></article>
                        <h3>VUEJS</h3>
                 </div>
                 <div data-aos="fade-left" className='icon'>
                       <article  style={{color:'#f0db4f'}}><SiJavascript/></article>
                        <h3>JAVASCRIPT</h3>
                 </div>
                 <div data-aos="fade-left" className='icon'>
                       <article  className={light?'light-color':'dark-color'}><FaGithub/></article>
                        <h3>GIT</h3>
                 </div>
                 <div data-aos="fade-left" className='icon'>
                       <article style={{color:'#007acc'}}><SiTypescript/></article>
                        <h3>TYPESCRIPT</h3>
                 </div>
                
             </div>
        </div>
    )
}
