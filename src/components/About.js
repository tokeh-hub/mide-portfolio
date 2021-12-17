import React from 'react'
import pic from '../img/aisha2.jpeg'
import cv from '../img/cv.pdf'
import { useGlobalContext } from '../context'
export default function About() {
    const{light} = useGlobalContext()
    return (
        <div className={light?'about light-color':'about dark-color'} id='about'>
            <div className='about-image'>
            <img src={pic} alt='pic'></img>
            </div>
            <div className='about-text'>
                 <h1>Hello, I'm Olatunji Aisha</h1>
                 <p style={{marginBottom:'10px'}}>
                     I am an up and coming frontend developer with the goals of becoming a world class frontend engineer. I live in Lagos,Nigeria.
                     I enjoy reading books on Psychology and seeing movies. I am self-learned and still learning how to build beautiful and 
                     responsive websites,maintaining websites and writing clean codes. 
                 </p>
                 
                 <div className='row'>
                     <h3>Phone</h3>
                     <p>:08161806852</p>
                 </div>
                 <div className='row'>
                     <h3>Email</h3>
                     <p>:olatunjiaisha12@gmail.com</p>
                 </div>
                <button className='btn'><a href={cv} download>Download CV</a></button>
                 
            </div>
        </div>
    )
}
