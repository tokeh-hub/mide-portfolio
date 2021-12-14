import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { socials } from '../data'
import pic from '../img/aisha.jpg'

// import "react-simple-typewriter/dist/index.css"

export default function Welcome() {
    return (
        <div className='welcome-section' id='home' >
            <div>
                    <h3><strong>Welcome!</strong></h3>
                    <h1>I'm{' '}
                        <span>
                            <Typewriter
                                words={['OLATUNJI Aisha', 'a Frontend-Developer']}
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
            
                            />
                        </span>
                    </h1>
                    <p>I am passionate about my job and love to deliver aesthetically pleasing and responsive websites to my clients.
                        I am a lover of art and fashion. </p>
                    
                    <ul className='social-icons'>
                        {socials.map(social=>{
                            const {id,url,icon} = social
                            return(
                                <li key={id} className='social'>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })}
                    </ul>
            </div>
            <div className='image-container'>
                <img src={pic} alt='pic'></img>
            </div>
        </div>
    )
}
