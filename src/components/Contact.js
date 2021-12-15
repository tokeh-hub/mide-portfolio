import React from 'react'
import { useGlobalContext } from '../context'


export default function Contact() {
    const{light} = useGlobalContext()
    return (
        <div className='contact' id='contact'>
             <div className='contact-title'>
             <h2  className={light?'light-color':'dark-color'}>CONTACT  <span>ME</span></h2>
             <div className='underline'></div>
             </div>
             <form>
                 <div className='inputs'>
                 <input className={light?'border-light':'border-dark'} type='text' placeholder='Name' ></input>
                 <input className={light?'border-light':'border-dark'} type='email' placeholder='Email' ></input>
                 <input className={light?'border-light':'border-dark'} type='text' placeholder='Subject' ></input>
                 </div>
                 <textarea className={light?'border-light':'border-dark'} placeholder='Your Message'></textarea>
                 <button type='submit' className='submit'>Send Message</button>
             </form>
        </div>
    )
}
