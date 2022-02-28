import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return <Wrapper className='section-center'>
  
  <h5>
    &copy; {new Date().getFullYear()}
    <span> Winnyzinteriors </span>
  </h5>
  <h6>All rights reserved.</h6>
</Wrapper>
}

const Wrapper = styled.footer`
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;

  span {
    color: var(--clr-primary-5);
  }
  
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  h6{
    color: var(--clr-white);
    margin: 0.4rem;
    padding-top:0.25rem;
    font-weight: 400;
    text-transform: none;
    
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
