import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { socials } from '../data'
import pic from '../img/compressed-me.jpg'
import { useGlobalContext } from '../context'

export default function Welcome() {
    const{light} = useGlobalContext()
    return (
        <div className='welcome-section' id='home' >
            <div data-aos="fade-left">
                    <h3><strong>Welcome!</strong></h3>
                    <h1 className={light?'light-color':'dark-color'}>I'm{' '}
                        <span>
                            <Typewriter
                                words={['OLATUNJI Aisha', 'a Frontend Developer']}
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
            
                            />
                        </span>
                    </h1>
                    <p className={light?'light-color':'dark-color'}>I am passionate about my job and love to deliver aesthetically pleasing and responsive websites to my clients.
                        I am a lover of art and fashion. </p>
                    
                    <ul className='social-icons'>
                        {socials.map(social=>{
                            const {id,url,icon} = social
                            return(
                                <li key={id} className={light?'social social-light':'social social-dark'}>
                                    <a target='_blank' rel="noreferrer" href={url}>{icon}</a>
                                </li>
                            )
                        })}
                    </ul>
            </div>
            <div data-aos="fade-right" className='image-container'>
                <img src={pic} alt='pic'></img>
            </div>
        </div>
    )
}
