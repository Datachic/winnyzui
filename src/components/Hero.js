import React from 'react'
import '../css/hero.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='section-center centerd'>
    <img src="choice/hero4.png" alt="" className='hero' />
      <article className='content'>
      <h1> <span className='win'>WINNYZ</span>  INTERIORS  </h1>
        <p>
        Made in Nigeria furniture to your specifications
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      
    </div>)
  
  }

export default Hero
