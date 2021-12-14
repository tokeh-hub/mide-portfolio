import React from 'react'
import {portfolio} from '../portfolio'


export const Portfolio = () => {
    return (
        <div className='portfolio-container' id='projects'>
              <div className='portfolio-title'>
             <h2  style={{color:'white'}}>MY  <span style={{color:'#ff4a57',marginLeft:'7px'}}>PORTFOLIO</span></h2>
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
                                    
                                         <a className='arrow' href={url}>{icon}</a>
                                
                               </div>
                           {/* </div> */}
                         </article>
                     )
                 })}
             </div>
        </div>
    )
}
