import React from 'react'
import {portfolio} from '../portfolio'
import { useGlobalContext } from '../context'
import ScrollAnimation from "react-animate-on-scroll";

export const Portfolio = () => {
    const{light} = useGlobalContext()
    return (
        <div className={light?'portfolio-container light-color':'portfolio-container dark-color'} id='projects'>
              <div className='portfolio-title'>
             <h2  className={light?'light-color':'dark-color'}>MY  <span>PORTFOLIO</span></h2>
             <div className='underline'></div>
             </div>
             <div className='projects'>
            
                 {portfolio.map(item=>{
                     const {id,url,img,title,icon} = item
                     return(
                         <article key={id} className='card'>
                           {/* <div className='card-inner'> */}
                               <div className='card-front'>
                                    <img className='image' src={img} alt={title}></img>
                               </div>
                               <div className='card-back'>
                                     <h3>{title}</h3>
                                    
                                         <a className='arrow' target="_blank" rel="noreferrer"  href={url}>{icon}</a>
                                
                               </div>
                           {/* </div> */}
                         </article>
                     )
                 })}
                
             </div>
        </div>
    )
}
