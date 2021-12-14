import React from 'react'

export default function Contact() {
    return (
        <div className='contact' id='contact'>
             <div className='contact-title'>
             <h2  style={{color:'white'}}>CONTACT  <span style={{color:'#ff4a57',marginLeft:'7px'}}>ME</span></h2>
             <div className='underline'></div>
             </div>
             <form>
                 <div className='inputs'>
                 <input type='text' placeholder='Name' ></input>
                 <input type='email' placeholder='Email' ></input>
                 <input type='text' placeholder='Subject' ></input>
                 </div>
                 <textarea placeholder='Your Message'></textarea>
                 <button type='submit' className='submit'>Send Message</button>
             </form>
        </div>
    )
}
