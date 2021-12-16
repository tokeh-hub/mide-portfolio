import React,{useState} from 'react'
import { useGlobalContext } from '../context'
import emailjs from 'emailjs-com';
import {FaTimes} from 'react-icons/fa'


const Result = () =>{
    return(
        <p>Your message has been successfully sent! I will contact you soon</p>
    )
}

export default function Contact() {
    const[result,setResult] = useState(false)
    const{light} = useGlobalContext()
    // const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ohm7qaj', 'template_s8epmg8', e.target , 'user_o74hji9tQnf7gjuY0yGiq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setResult(true)
      };
    return (
        <div className='contact' id='contact'>
             <div className='contact-title'>
             <h2  className={light?'light-color':'dark-color'}>CONTACT  <span>ME</span></h2>
             <div className='underline'></div>
             </div>
             
             {result ? 
                 <div className='overlay'>
                   <div id='text'>
                       <div className='cancel' >
                      <FaTimes onClick={()=>setResult(false)}/>
                      </div>
                      <Result/> 
                      </div>   
                </div>  
            : null}
                 
             
             <form action='' onSubmit={sendEmail}>
                 <div className='inputs'>
                 <input className={light?'border-light':'border-dark'} type='text' placeholder='Full-name' name='fullname' required ></input>
                 <input className={light?'border-light':'border-dark'} type='email' placeholder='Email' name='email' required ></input>
                 <input className={light?'border-light':'border-dark'} type='number' placeholder='Phone'  name='phone' required ></input>
                 </div>
                 <textarea className={light?'border-light':'border-dark'} placeholder='Your Message' name='message'></textarea>
                 <button type='submit' className='submit'>Send Message</button>
             </form>
             
        </div>
    )
}
