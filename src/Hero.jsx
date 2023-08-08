import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>React Projects</h1>
         <p>
           Projects are the most practical way to learn any language, and<span> React </span> is no exception. Solidify my knowledge of React by creating these cool projects.
         </p>
        </div>
        <div className='img-container'>
          <img
            src={heroImg}
            alt='woman and the browser'
            className='img'
          />
        </div>
      </div>
    </section>
  )
}
export default Hero
