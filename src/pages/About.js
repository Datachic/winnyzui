import React from 'react'
import styled from 'styled-components'
import '../css/about.css'
import { PageHero } from '../components'

const About = () => {
  return (
    <main>
      <PageHero title='about' />
      <section className='page section section-center'>
        <img src='choice/singles.jpg' alt='nice desk' />
        <article>
          <div className='title'>
            <h3>our story</h3>
            <div className='lyn underline'></div>
          </div>
          <p className='about'>
          <span>Winnyz Interiors</span> is an indigenous furniture production 
          company with 2 big showrooms and a factory in Lagos, Nigeria.<br/>
          We are majorly into local production of home, office 
          and hotel furniture.<br/> However, we do import office 
          furniture from Malaysia, China, Taiwan.<br/>
          Feel free to send us your own design pieces to reproduce...<br/>
          we sure make great if not better copies! 🤷‍♀️<br/>
          Best part...you can mix and match any of our designs👍😁<br/>
          And yes! We offer great after sales service👐
          </p>
        </article>
      </section>
    </main>
  )}

// const Wrapper = styled.section`
//   display: flex;
//   flex-direction:row;
//   gap: 4rem;
//   justify-content:center;


//   img {
//     width: 29%;
//     display: block;
//     border-radius: var(--radius);
//     object-fit: fill;
//     margin-top:2rem;
//     box-shadow: 0 0 17px 10px rgb(235, 245, 240);
//   }
    
//   article{
//     height:65%;
//     width:45%;
//     margin-top:3rem;
//   }
//   .about{
//     ${'' /* letter-spacing: .05rem; */}
//     margin-top:3rem;
//   }
//   p {
//     line-height: 2;
//     max-width: 45em;
//     margin: 0 auto;
//     margin-top: 2rem;
//     color: var(--clr-grey-5);
//   }
//   .title {
//     text-align: left;
//   }
//   span{
//     font-weight:bold;
//   }
//   .underline {
//     margin-left: 0;
//   }
//   @media (min-width: 992px) {
//     ${'' /* grid-template-columns: 1fr 1fr; */}
//   }
// `

export default About;
