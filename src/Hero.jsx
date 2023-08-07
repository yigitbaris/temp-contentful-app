import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          {/* <p>
            Umami chambray cupping typewriter woke, kogi hot chicken mlkshk
            hoodie XOXO man bun coloring book pug tumeric 3 wolf moon.
            Succulents af single-origin coffee forage biodiesel drinking vinegar
            tilde. Cupping prism cray mumblecore shaman hoodie, hammock chambray
            tattooed meh distillery bespoke.
          </p> */}
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
