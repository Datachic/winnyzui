import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../css/cartbuttons.css'
import styled from 'styled-components'
import { links } from "../utils/constants";
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const closeSidebar  = true
  const  total_items = 1
  const clearCart = false
  const loginWithRedirect = true
  const myUser = false
  const logout =false
  
  // const { closeSidebar } = useProductsContext()
  // const { total_items, clearCart } = useCartContext()
  // const { loginWithRedirect, myUser, logout } = useUserContext()

  return (
    <div className='cont cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        <span className='shw'>Cart</span> 
        <span className='cart-container'>
          <FaShoppingCart />
          <span className={total_items > 0 ? 'cart-value' : 'cart-value2' }>
                {total_items}
          </span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => {
            clearCart()
            localStorage.removeItem('user')
            logout({ returnTo: window.location.origin })
          }}
        >
         <span className='shwL'>Logout </span>  <span><FaUserMinus /></span>
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
         <span className=' shw shwL'>Login</span> <span><FaUserPlus /></span> 
        </button>
      )}
    </div>
  )

}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 110px;
  position:relative;
  margin:0 0 0 2rem;

  .shw, .shwL{
    display:none;
    position:absolute;
    transform: scale(.7);
    font-weight:bold;
  }
  .shw{
    top:25px;
    left:-9px;
  }
  .shwL{
    top:29px;
    left:35px;
  }

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-btn:hover{
    .shw{
      display:block;
    }
   
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -15px;
    background: var(--clr-primary-5);
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.65rem;
    font-weight:bold;
    color: var(--clr-white);
    padding: 12px;
  }

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }

  .auth-btn:hover{
    .shwL{
      display:block;
    }
  }
`
export default CartButtons
