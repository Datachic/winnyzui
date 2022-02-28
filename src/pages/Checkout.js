import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2 style={{fontSize:'3rem', padding:'10rem'}}>
            your cart is empty</h2>
            <Link to='/products' className='btn fillIt'>
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`

  display: flex; 
  align-items: center;
  justify-content: center; 

   .empty {
    text-align: center;
   }

   .fillIt{
     ${'' /* display:flex; */}
    animation: pulse 0.9s infinite ease-out;
    width:10rem;
    height:3rem;
    transition:1s;
    font-weight:900;
    color: red;
    ${'' /* align-content:center;
    justify-content:center; */}

   }

   .btn:hover {
  }
   
  @keyframes pulse {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    70% {
      transform: scale(0.65);
    }
    100% {
      transform: scale(0.4);
    }
  }

`
export default CheckoutPage
