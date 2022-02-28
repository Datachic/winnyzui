import React from 'react'
import { FeaturedProducts, 
         Hero, 
         Services, 
         Contact 
        } 
from '../components'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
      <main>
        <Hero />
        <FeaturedProducts />
        {/* <Services /> */}
        {/* <Contact /> */}
       </main>
   )

}

export default Home
