import React from "react";
import '../css/navbar.css';
import {NavCont, NavWrap, Navbar} from "../stylz/styldNav";
import { FaBars } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const user = true;
const basket = [];
const initialState = { basket: []};
const myUser = true
const openSidebar = ()=>{}
// const { openSidebar } = useProductsContext()
//   const { myUser } = useUserContext()
const id = 4

const Nav = () => {
  return (<>
    <nav className="nav section-center">
        <div className='nav-header'>
        <Link to='/'>
            <img src='choice/logo3.jpg' alt='' className="logo"/>
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
         </div>  

         <div className="center">
          <div className="header_search nav-links">
            <input className="header_searchInput" type="text" 
            placeholder="Browse by categories"/>
            <SearchIcon className="header_searchIcon" />
          </div>
          <div className="leftStf">
            <div className="nav-links">
             <ul className='nav-links'>
               {links.map((link) => {
                const { id, text, url } = link
                 return (
                    <li key={id}>
                       <Link to={url}>{text}</Link>
                   </li>
                   )
                 })}
               {myUser && (
                <li>
                 <Link to='/checkout'>checkout</Link>
                  </li>
                )}
               </ul>
            </div>

          <div className="cart-btn-wrapper"> 
            <CartButtons />
          </div>

       </div> 
          </div>
          
       
    </nav>
    
 
    </>

  );//return end
};//Nav component end

export default Nav;
